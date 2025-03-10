'use client'
import React, { useRef } from 'react';
import ProjectCard from './project-card';
import { Project } from '@/lib/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectScrollProps {
  projects: Project[];
}

export function ProjectScroll({ projects }: ProjectScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    container.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full py-8">
      {/* Header with title and subtitle */}

      {/* Project cards carousel with navigation arrows */}
      <div className="relative group -mx-4 md:-mx-8 lg:-mx-16">
        {/* Left navigation arrow */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/10 backdrop-blur-sm hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4 snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div key={project.slug} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* Right navigation arrow */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/10 backdrop-blur-sm hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}