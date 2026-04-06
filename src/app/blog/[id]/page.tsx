import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getPosts } from '@/lib/blog';
import StreamFieldRenderer from '@/components/StreamFieldRenderer';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const pageId = Number.parseInt(id, 10);

  if (Number.isNaN(pageId)) {
    notFound();
  }

  const post = await getPost(pageId);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.category_data
    ? (await getPosts(post.category_data.slug)).filter((p) => p.id !== post.id).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        {post.featured_image?.meta?.download_url ? (
          <Image
            src={post.featured_image.meta.download_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-sand-lightest flex items-center justify-center">
            <span className="text-9xl text-sand/30">&#9998;</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sand-dark hover:text-burnt-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Category Badge */}
        {post.category_data && (
          <div className="mb-6">
            <Link
              href={`/blog?category=${post.category_data.slug}`}
              className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-sand-light text-sand-dark border border-sand hover:border-burnt-orange hover:text-burnt-orange transition-colors"
            >
              {post.category_data.name}
            </Link>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
          {post.title}
        </h1>

        {/* Meta row: date + tags */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          {post.first_published_at && (
            <span className="text-sand-dark/60 text-sm font-mono">
              {formatDate(post.first_published_at)}
            </span>
          )}

          {post.tags_data.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags_data.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog?tag=${tag.slug}`}
                  className="text-xs px-3 py-1 rounded-full bg-sand-lightest text-sand-dark border border-sand-lighter hover:border-burnt-orange hover:text-burnt-orange transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-sand-dark leading-relaxed mb-10 font-light border-l-4 border-burnt-orange pl-6">
            {post.excerpt}
          </p>
        )}

        {/* Body */}
        {post.body && post.body.length > 0 && (
          <StreamFieldRenderer blocks={post.body} />
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-sand-lighter">
            <h2 className="text-3xl font-bold mb-8 text-black">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="group block"
                >
                  {related.featured_image?.meta?.download_url ? (
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={related.featured_image.meta.download_url}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-sand-lightest rounded-xl flex items-center justify-center mb-4">
                      <span className="text-5xl text-sand/30">&#9998;</span>
                    </div>
                  )}
                  <h3 className="font-bold text-lg group-hover:text-burnt-orange transition-colors text-black leading-snug">
                    {related.title}
                  </h3>
                  {related.first_published_at && (
                    <p className="text-xs text-sand-dark/60 mt-1 font-mono">
                      {formatDate(related.first_published_at)}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
