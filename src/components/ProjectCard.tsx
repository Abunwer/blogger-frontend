import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/wagtail';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group cursor-pointer bg-white border border-sand-lighter rounded-lg overflow-hidden transition-all duration-300 hover:border-burnt-orange hover:shadow-lg hover:shadow-burnt-orange/30">
        {/* Image */}
        {project.featured_image?.meta?.download_url ? (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.featured_image.meta.download_url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="h-64 bg-sand-lightest flex items-center justify-center">
            <span className="text-6xl text-sand/40">🏜️</span>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          {project.category && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-sand-light text-sand-dark border border-sand">
                {project.category.icon && <span className="mr-1">{project.category.icon}</span>}
                {project.category.name}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-burnt-orange transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          {project.description && (
            <p className="text-sand-dark text-sm line-clamp-3 mb-4">
              {project.description}
            </p>
          )}
          
          {/* Date */}
          {project.first_published_at && (
            <div className="text-xs text-sand-dark/60 font-mono">
              {formatDate(project.first_published_at)}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

