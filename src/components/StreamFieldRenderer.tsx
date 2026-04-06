import Image from 'next/image';
import { StreamBlock } from '@/lib/blog';

interface StreamFieldRendererProps {
  blocks: StreamBlock[];
}

export default function StreamFieldRenderer({ blocks }: StreamFieldRendererProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="space-y-6">
      {blocks.map((block) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={block.id}
              className="text-2xl md:text-3xl font-bold text-black leading-snug"
            >
              {block.value}
            </h2>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <div
              key={block.id}
              className="prose prose-sand max-w-none text-sand-dark leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.value }}
            />
          );
        }

        if (block.type === 'image') {
          const downloadUrl = block.value?.meta?.download_url;
          if (!downloadUrl) return null;
          return (
            <figure key={block.id} className="my-8">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src={downloadUrl}
                  alt={block.value.title || ''}
                  fill
                  className="object-cover"
                />
              </div>
              {block.value.title && (
                <figcaption className="mt-2 text-center text-sm text-sand-dark/60">
                  {block.value.title}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
}
