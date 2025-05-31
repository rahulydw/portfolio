"use client"
import React,{useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const ThemeToggel = () => {
    const {theme, setTheme} = useTheme();
    const [mount, setMount] = useState(false);

    useEffect(()=>{
        setMount(true);
    },[])
    if(!mount) return null;

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
        {(theme === "dark" ? <Moon/> : <Sun/>)}
    </Button>
  )
}

export default ThemeToggel