import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/work/${project.slug}`}
      className="group block w-[300px] sm:w-[450px] md:w-[600px] lg:w-[450px]"
    >
      <article className="flex flex-col gap-6">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[280px] rounded-2xl overflow-hidden">
          <img
            src={project.images[0].url}
            alt={project.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold">{project.name}</h3>
              <span className="text-[--clr-grey-base] text-sm">•</span>
              <span className="text-[--clr-grey-base] text-sm">{project.stack[0]}</span>
            </div>
            <span className="text-[--clr-grey-base] text-sm">{project.turnaround}</span>
          </div>
          <p className="text-[--clr-grey-base] text-base sm:text-lg line-clamp-2">{project.description}</p>
        </div>
      </article>
    </Link>
  );
} 