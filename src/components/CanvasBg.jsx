"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

// Vector Class
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.add = function(a, b) {
  return new Vector(a.x + b.x, a.y + b.y);
};

Vector.sub = function(a, b) {
  return new Vector(a.x - b.x, a.y - b.y);
};

Vector.scale = function(v, s) {
  return v.clone().scale(s);
};

Vector.random = function() {
  return new Vector(Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25); // Reduced random speed for smoother movement
};

Vector.prototype = {
  set: function(x, y) {
    if (typeof x === 'object') {
      y = x.y;
      x = x.x;
    }
    this.x = x || 0;
    this.y = y || 0;
    return this;
  },
  add: function(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  },
  sub: function(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  },
  scale: function(s) {
    this.x *= s;
    this.y *= s;
    return this;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y;
  },
  normalize: function() {
    var m = Math.sqrt(this.x * this.x + this.y * this.y);
    if (m) {
      this.x /= m;
      this.y /= m;
    }
    return this;
  },
  angle: function() {
    return Math.atan2(this.y, this.x);
  },
  angleTo: function(v) {
    var dx = v.x - this.x,
        dy = v.y - this.y;
    return Math.atan2(dy, dx);
  },
  distanceTo: function(v) {
    var dx = v.x - this.x,
        dy = v.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  },
  distanceToSq: function(v) {
    var dx = v.x - this.x,
        dy = v.y - this.y;
    return dx * dx + dy * dy;
  },
  lerp: function(v, t) {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    return this;
  },
  clone: function() {
    return new Vector(this.x, this.y);
  },
  toString: function() {
    return '(x:' + this.x + ', y:' + this.y + ')';
  }
};

// GravityPoint Class
function GravityPoint(x, y, radius, targets, isDarkMode) {
  Vector.call(this, x, y);
  this.radius = radius;
  this.currentRadius = radius * 0.5;
  this._targets = {
    particles: targets.particles || [],
    gravities: targets.gravities || []
  };
  this._speed = new Vector();
  this.isDarkMode = isDarkMode;
  this.blasting = false; // For blast animation
  this.blastAlpha = 1; // For fading during blast
}

GravityPoint.RADIUS_LIMIT = 65;
GravityPoint.interferenceToPoint = true;

GravityPoint.prototype = (function(o) {
  var s = new Vector(0, 0), p;
  for (p in o) s[p] = o[p];
  return s;
})({
  gravity: 0.02,
  isMouseOver: false,
  dragging: false,
  destroyed: false,
  _easeRadius: 0,
  _dragDistance: null,
  _collapsing: false,
  hitTest: function(p) {
    return this.distanceTo(p) < this.radius;
  },
  startDrag: function(dragStartPoint) {
    this._dragDistance = Vector.sub(dragStartPoint, this);
    this.dragging = true;
  },
  drag: function(dragToPoint) {
    this.x = dragToPoint.x - this._dragDistance.x;
    this.y = dragToPoint.y - this._dragDistance.y;
  },
  endDrag: function() {
    this._dragDistance = null;
    this.dragging = false;
  },
  addSpeed: function(d) {
    this._speed = this._speed.add(d);
  },
  collapse: function() {
    this.currentRadius *= 1.75;
    this._collapsing = true;
  },
  startBlast: function() {
    this.blasting = true;
    this.currentRadius *= 2; // Expand during blast
  },
  render: function(ctx, particlesRef) {
    if (this.destroyed) return;

    var particles = this._targets.particles,
        i, len;

    // Absorb particles within radius
    for (i = 0, len = particles.length; i < len; i++) {
      if (this.distanceTo(particles[i]) < this.radius) {
        particles.splice(i, 1); // Absorb (remove) particle
        len--;
        i--;
      } else {
        particles[i].addSpeed(Vector.sub(this, particles[i]).normalize().scale(this.gravity));
      }
    }

    this._easeRadius = (this._easeRadius + (this.radius - this.currentRadius) * 0.07) * 0.95;
    this.currentRadius += this._easeRadius;
    if (this.currentRadius < 0) this.currentRadius = 0;

    if (this._collapsing) {
      this.radius *= 0.75;
      if (this.currentRadius < 1) this.destroyed = true;
      this._draw(ctx);
      return;
    }

    var gravities = this._targets.gravities,
        g, absorp,
        area = this.radius * this.radius * Math.PI, garea;

    for (i = 0, len = gravities.length; i < len; i++) {
      g = gravities[i];
      if (g === this || g.destroyed) continue;

      if (
        (this.currentRadius >= g.radius || this.dragging) &&
        this.distanceTo(g) < (this.currentRadius + g.radius) * 0.85
      ) {
        g.destroyed = true;
        this.gravity += g.gravity;
        absorp = Vector.sub(g, this).scale(g.radius / this.radius * 0.5);
        this.addSpeed(absorp);
        garea = g.radius * g.radius * Math.PI;
        this.currentRadius = Math.sqrt((area + garea * 3) / Math.PI);
        this.radius = Math.sqrt((area + garea) / Math.PI);
      }
      g.addSpeed(Vector.sub(this, g).normalize().scale(this.gravity));
    }

    if (GravityPoint.interferenceToPoint && !this.dragging) {
      this.add(this._speed);
    }

    this._speed = new Vector();
    if (this.currentRadius > GravityPoint.RADIUS_LIMIT) this.collapse();

    // Trigger blast if all particles are absorbed
    if (particles.length === 0 && !this.blasting) {
      this.startBlast();
    }

    // Handle blast animation
    if (this.blasting) {
      this.currentRadius += 5; // Expand rapidly
      this.blastAlpha -= 0.05; // Fade out
      if (this.blastAlpha <= 0) {
        this.destroyed = true;
        // Respawn stars after blast
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
          const radius = Math.random() * 3 + 2;
          const p = new Particle(
            Math.random() * ctx.canvas.width,
            -radius, // Start above the screen
            radius,
            this.isDarkMode
          );
          p.addSpeed(new Vector(0, Math.random() * 2 + 1)); // Fall downward
          particlesRef.current.push(p);
        }
      }
    }

    this._draw(ctx);
  },
  _draw: function(ctx) {
    var grd, r;
    ctx.save();

    grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius * 5);
    grd.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2, false);
    ctx.fillStyle = grd;
    ctx.fill();

    r = Math.random() * this.currentRadius * 0.7 + this.currentRadius * 0.3;
    grd = ctx.createRadialGradient(this.x, this.y, r, this.x, this.y, this.currentRadius);
    if (this.isDarkMode) {
      grd.addColorStop(0, 'rgba(0, 0, 0, 1)');
      grd.addColorStop(1, Math.random() < 0.2 ? 'rgba(255, 196, 0, 0.15)' : 'rgba(103, 181, 191, 0.75)');
    } else {
      grd.addColorStop(0, 'rgba(100, 100, 100, 0.8)');
      grd.addColorStop(1, Math.random() < 0.2 ? 'rgba(255, 215, 0, 0.3)' : 'rgba(66, 153, 225, 0.6)');
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = grd;
    ctx.globalAlpha = this.blastAlpha; // Fade during blast
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();
  }
});

// Particle Class
function Particle(x, y, radius, isDarkMode) {
  Vector.call(this, x, y);
  this.radius = radius;
  this._latest = new Vector();
  this._speed = new Vector();
  // Fully random color for each star
  this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  this.isDarkMode = isDarkMode;
}

Particle.prototype = (function(o) {
  var s = new Vector(0, 0), p;
  for (p in o) s[p] = o[p];
  return s;
})({
  addSpeed: function(d) {
    this._speed.add(d);
  },
  update: function() {
    if (this._speed.length() > 6) this._speed.normalize().scale(6); // Reduced speed limit for smoother movement
    this._latest.set(this);
    this.add(this._speed);
  }
});

// CanvasBg Component
const CanvasBg = () => {
  const canvasRef = useRef(null);
  const bufferCanvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef(new Vector());
  const gravitiesRef = useRef([]);
  const particlesRef = useRef([]);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'));

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    const bufferCanvas = bufferCanvasRef.current;

    if (!canvas || !bufferCanvas) {
      console.error('Canvas or Buffer Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    const bufferCtx = bufferCanvas.getContext('2d');

    if (!ctx || !bufferCtx) {
      console.error('Canvas context not initialized');
      return;
    }

    let screenWidth, screenHeight;

    const resize = () => {
      screenWidth = canvas.width = window.innerWidth;
      screenHeight = canvas.height = window.innerHeight;
      bufferCanvas.width = screenWidth;
      bufferCanvas.height = screenHeight;

      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
      ctx.fillStyle = grad;
    };

    const mouseMove = (e) => {
      mouseRef.current.set(e.clientX, e.clientY);
      let hit = false;
      for (let i = gravitiesRef.current.length - 1; i >= 0; i--) {
        const g = gravitiesRef.current[i];
        if ((!hit && g.hitTest(mouseRef.current)) || g.dragging) {
          g.isMouseOver = hit = true;
        } else {
          g.isMouseOver = false;
        }
      }
      canvas.style.cursor = hit ? 'pointer' : 'default';
    };

    const mouseDown = (e) => {
      for (let i = gravitiesRef.current.length - 1; i >= 0; i--) {
        if (gravitiesRef.current[i].isMouseOver) {
          gravitiesRef.current[i].startDrag(mouseRef.current);
          return;
        }
      }
      gravitiesRef.current.push(new GravityPoint(e.clientX, e.clientY, 10, {
        particles: particlesRef.current,
        gravities: gravitiesRef.current
      }, isDarkMode));
    };

    const mouseUp = () => {
      for (let i = 0; i < gravitiesRef.current.length; i++) {
        if (gravitiesRef.current[i].dragging) {
          gravitiesRef.current[i].endDrag();
          break;
        }
      }
    };

    const doubleClick = () => {
      for (let i = gravitiesRef.current.length - 1; i >= 0; i--) {
        if (gravitiesRef.current[i].isMouseOver) {
          gravitiesRef.current[i].collapse();
          break;
        }
      }
    };

    const addParticle = (num) => {
      for (let i = 0; i < num; i++) {
        const radius = Math.random() * 3 + 2;
        const p = new Particle(
          Math.floor(Math.random() * screenWidth - radius * 2) + 1 + radius,
          Math.floor(Math.random() * screenHeight - radius * 2) + 1 + radius,
          radius,
          isDarkMode
        );
        p.addSpeed(Vector.random());
        particlesRef.current.push(p);
      }
    };

    // Function to draw a star shape
    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color) => {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const loop = () => {
      try {
        const gradient = ctx.createLinearGradient(0, 0, 0, screenHeight);
        if (isDarkMode) {
          gradient.addColorStop(0, '#1e3a8a');
          gradient.addColorStop(0.5, '#4B0082');
          gradient.addColorStop(1, '#000000');
        } else {
          gradient.addColorStop(0, '#87CEEB');
          gradient.addColorStop(0.5, '#FFD1DC');
          gradient.addColorStop(1, '#FFFFFF');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, screenWidth, screenHeight);

        let i, len, g, p;
        for (i = 0, len = gravitiesRef.current.length; i < len; i++) {
          g = gravitiesRef.current[i];
          if (g.dragging) g.drag(mouseRef.current);
          g.render(ctx, particlesRef);
          if (g.destroyed) {
            gravitiesRef.current.splice(i, 1);
            len--;
            i--;
          }
        }

        bufferCtx.globalCompositeOperation = 'destination-out';
        bufferCtx.globalAlpha = 0.35;
        bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
        bufferCtx.globalCompositeOperation = 'source-over';
        bufferCtx.globalAlpha = 1;

        len = particlesRef.current.length;
        bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
        bufferCtx.lineWidth = 2;
        bufferCtx.beginPath();
        for (i = 0; i < len; i++) {
          p = particlesRef.current[i];
          p.update();
          bufferCtx.strokeStyle = p.color;
          bufferCtx.globalAlpha = 0.5;
          bufferCtx.moveTo(p.x, p.y);
          bufferCtx.lineTo(p._latest.x, p._latest.y);
        }
        bufferCtx.stroke();
        bufferCtx.globalAlpha = 1;

        bufferCtx.beginPath();
        for (i = 0; i < len; i++) {
          p = particlesRef.current[i];
          bufferCtx.globalAlpha = 0.5;
          drawStar(bufferCtx, p.x, p.y, 5, p.radius, p.radius / 2, p.color); // Draw star
        }
        bufferCtx.globalAlpha = 1;

        ctx.drawImage(bufferCanvas, 0, 0);

        rafRef.current = requestAnimationFrame(loop);
      } catch (error) {
        console.error('Animation Loop Error:', error);
        ctx.fillStyle = isDarkMode ? '#fff' : '#333';
        ctx.font = '20px Arial';
        ctx.fillText('Canvas Animation Failed', 50, 50);
      }
    };

    resize();
    addParticle(100);
    loop();

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('dblclick', doubleClick);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', mouseMove);
      canvas.removeEventListener('mousedown', mouseDown);
      canvas.removeEventListener('mouseup', mouseUp);
      canvas.removeEventListener('dblclick', doubleClick);
      window.removeEventListener('resize', resize);
    };
  }, [mounted, isDarkMode]);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <canvas
        ref={bufferCanvasRef}
        className='overflow-hidden'
      />
    </div>
  );
};

export default CanvasBg;