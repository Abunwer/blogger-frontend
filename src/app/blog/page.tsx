import { getPosts, getBlogCategories } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import CategoryFilter from '@/components/CategoryFilter';

interface BlogPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category: categorySlug, tag: tagSlug } = await searchParams;

  const [posts, categories] = await Promise.all([
    getPosts(categorySlug, tagSlug),
    getBlogCategories(),
  ]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black">Blog</h1>
          <p className="text-sand-dark text-lg">
            Thoughts, stories and ideas
          </p>
        </div>

        {/* Active tag banner */}
        {tagSlug && (
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sand-dark text-sm">
              Showing posts tagged:
            </span>
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-burnt-orange text-white">
              {tagSlug}
            </span>
            <a
              href="/blog"
              className="text-xs text-sand-dark/60 hover:text-burnt-orange transition-colors underline"
            >
              Clear
            </a>
          </div>
        )}

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-12">
            <CategoryFilter
              categories={categories}
              activeCategory={categorySlug}
              basePath="/blog"
              allLabel="All Posts"
            />
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">&#9998;</p>
            <p className="text-sand-dark text-xl mb-2">No posts found</p>
            <p className="text-sand-dark/60">
              {categorySlug || tagSlug
                ? 'Try selecting a different filter'
                : 'Check back soon for new posts!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
