import Link from "next/link";
import { getFeaturedProjects, getCategories } from "@/lib/wagtail";
import ProjectCard from "@/components/ProjectCard";
import CategoryFilter from "@/components/CategoryFilter";

export default async function Home() {
  const [featuredProjects, categories] = await Promise.all([
    getFeaturedProjects(),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-sand-lightest via-beige to-sand-light overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burnt-orange/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sand/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            Discover the
            <span className="block text-burnt-orange mt-2">Arabian Desert</span>
          </h1>
          <p className="text-xl md:text-2xl text-sand-dark mb-8 max-w-2xl mx-auto leading-relaxed">
            Unforgettable adventures under endless stars
          </p>
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-burnt-orange text-white font-bold rounded-lg hover:bg-orange-light transition-colors duration-300 shadow-lg"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <CategoryFilter categories={categories} basePath="/projects" allLabel="All Projects" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">Featured Adventures</h2>
          <p className="text-sand-dark text-lg">
            Handpicked experiences for unforgettable memories
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-sand-dark text-xl mb-4">No projects available yet.</p>
            <p className="text-sand-dark/60">
              Check back soon for exciting adventures!
            </p>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-sand-dark rounded-lg hover:bg-sand-lightest transition-colors font-medium text-black"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
