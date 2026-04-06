import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface PostCardProps {
  post: BlogPost;
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden border border-sand-lighter hover:border-sand transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative h-52 overflow-hidden bg-sand-lightest flex-shrink-0">
          {post.featured_image?.meta?.download_url ? (
            <Image
              src={post.featured_image.meta.download_url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-7xl text-sand/30">&#9998;</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category Badge */}
          {post.category_data && (
            <span className="inline-block self-start px-3 py-1 text-xs font-semibold rounded-full bg-sand-light text-sand-dark border border-sand mb-3">
              {post.category_data.name}
            </span>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-black leading-snug mb-2 group-hover:text-burnt-orange transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sand-dark text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
              {post.excerpt}
            </p>
          )}

          {/* Footer: date + tags */}
          <div className="mt-auto pt-4 border-t border-sand-lighter flex flex-wrap items-center gap-2">
            {post.first_published_at && (
              <span className="text-xs text-sand-dark/60 font-mono">
                {formatDate(post.first_published_at)}
              </span>
            )}

            {post.tags_data.length > 0 && (
              <div className="flex flex-wrap gap-1 ml-auto">
                {post.tags_data.slice(0, 3).map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs px-2 py-0.5 bg-sand-lightest text-sand-dark rounded-full border border-sand-lighter"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
