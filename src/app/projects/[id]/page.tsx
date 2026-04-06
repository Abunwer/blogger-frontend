import { getProject, getProjects } from "@/lib/wagtail";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: { id: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const pageId = Number.parseInt(id);
  if (Number.isNaN(pageId)) {
    notFound();
  }
  
  const project = await getProject(pageId);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get related projects (from same category, excluding current)
  const relatedProjects = project.category
    ? (await getProjects()).filter(
        (p) => p.category?.id === project.category?.id && p.id !== project.id
      ).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        {project.featured_image?.meta?.download_url ? (
          <Image
            src={project.featured_image.meta.download_url}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-sand-lightest flex items-center justify-center">
            <span className="text-9xl text-sand/40">🏜️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sand-dark hover:text-burnt-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Category Badge */}
        {project.category && (
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-sand-light text-sand-dark border border-sand">
              {project.category.icon && <span className="mr-2">{project.category.icon}</span>}
              {project.category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
          {project.title}
        </h1>

        {/* Date */}
        {project.first_published_at && (
          <div className="text-sand-dark/60 text-sm mb-8 font-mono">
            Published on {formatDate(project.first_published_at)}
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div
            className="text-lg text-sand-dark leading-relaxed mb-12 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}

        {/* Body Content */}
        {project.body && (
          <div className="text-sand-dark/80 leading-relaxed mb-12">
            {/* StreamField content would be rendered here */}
            <p className="text-lg">
              Full project content will be displayed here when available from the Wagtail API.
            </p>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-16 border-t border-sand-lighter">
            <h2 className="text-3xl font-bold mb-8 text-black">Related Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.id}`}
                  className="group block"
                >
                  {related.featured_image?.meta?.download_url ? (
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={related.featured_image.meta.download_url}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-sand-lightest rounded-lg flex items-center justify-center mb-4">
                      <span className="text-5xl text-sand/40">🏜️</span>
                    </div>
                  )}
                  <h3 className="font-bold text-lg group-hover:text-burnt-orange transition-colors text-black">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

