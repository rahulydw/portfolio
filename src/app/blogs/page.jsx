import React from 'react';

const BlogsPage = () => {
  return (
    <section
      id="blogs"
      className="min-h-[calc(100vh-60px)] w-full overflow-hidden py-10 px-4 sm:px-8 bg-gradient-to-b from-slate-200 via-gray-300 to-gray-400 dark:from-black dark:via-slate-900 dark:to-gray-800 flex items-center justify-center"
      role="region"
      aria-label="Blogs section"
    >
      <h2
        className="text-3xl font-bold text-center dark:text-white"
        lang="en"
      >
        Blogs Section{' '}
        <span className="dark:text-cyan-400 text-blue-500">Under Construction</span>
      </h2>
    </section>
  );
};

export default BlogsPage;