import { getProjects, getCategories } from "@/lib/wagtail";
import ProjectCard from "@/components/ProjectCard";
import CategoryFilter from "@/components/CategoryFilter";

interface ProjectsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category: categorySlug } = await searchParams;
  const [projects, categories] = await Promise.all([
    getProjects(categorySlug),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black">All Adventures</h1>
          <p className="text-sand-dark text-lg">
            Discover our complete collection of desert experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            activeCategory={categorySlug}
            basePath="/projects"
            allLabel="All Projects"
          />
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🏜️</p>
            <p className="text-sand-dark text-xl mb-2">No projects found</p>
            <p className="text-sand-dark/60">
              {categorySlug
                ? "Try selecting a different category"
                : "Check back soon for new adventures!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

