import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <article className="flex flex-col items-start lg:items-center gap-10 py-20 px-5 md:px-20 lg:px-32">
        {/* Header */}
        <header className="flex flex-col gap-8 max-w-4xl lg:w-[800px] ">
          <h1>{project.name}</h1>
          <p className="text-xl md:text-2xl text-[--clr-grey-base]">{project.description}</p>
        </header>

        {/* Project Details */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[800px]">
          {/* Deliverables */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Deliverables</h2>
            <ul className="space-y-2 text-[--clr-grey-base]">
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="flex flex-col gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                
                className="object-cover"
              />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
} 