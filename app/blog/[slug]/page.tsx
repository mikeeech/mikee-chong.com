import { getBlogLinksMetadata, getBlogPostBySlug } from '@/lib/blog';
import { openGraphDefaults, otherDefaults } from '@/lib/metadata';
import { Metadata, ResolvingMetadata } from 'next';
import Footer from '@/components/Footer';
import Markdown from '@/components/Markdown';
import dayjs from 'dayjs';
import Link from 'next/link';

// 404 when an unsupported slug is visited.
export const dynamicParams = false;

export async function generateStaticParams() {
  const metadata = await getBlogLinksMetadata({ postsOnly: true });
  return metadata.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getBlogPostBySlug(slug);

  const title = `${metadata.title} - Mikee Chong`;
  return {
    title: title,
    description: metadata.excerpt,
    openGraph: {
      ...openGraphDefaults,
      title: title,
      description: metadata.excerpt,
      type: 'article',
      authors: ['Mikee Chong'],
    },
    other: {
      ...otherDefaults,
      'article:published_time': dayjs(metadata.created).toISOString(),
      'article:modified_time': dayjs(metadata.updated).toISOString(),
    },
  };
}

function toDateString(date: Date) {
  return dayjs(date).format('ddd, MMM D, YYYY');
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = await getBlogPostBySlug(slug);

  const inlineCodeClasses = [
    '[&_:not(pre)>code]:rounded-lg',
    '[&_:not(pre)>code]:border',
    '[&_:not(pre)>code]:border-solid',
    '[&_:not(pre)>code]:border-slate-300',
    '[&_:not(pre)>code]:bg-slate-100',
    '[&_:not(pre)>code]:px-2',
    '[&_:not(pre)>code]:py-1',
    '[&_:not(pre)>code]:text-sm',
    '[&_:not(pre)>code]:font-normal',
    '[&_:not(pre)>code]:before:content-none',
    '[&_:not(pre)>code]:after:content-none',
  ].join(' ');

  const headingAnchorClasses = [
    '[&_:is(h1,h2,h3,h4,h5,h6,th)>a]:font-bold',
    '[&_:is(h1,h2,h3,h4,h5,h6,th)>a]:no-underline',
    'hover:[&_:is(h1,h2,h3,h4,h5,h6,th)>a]:underline',
  ].join(' ');

  return (
    <div>
      <main className='mb-4'>
        <h1 className='mb-2 text-3xl font-bold'>{metadata.title}</h1>
        <p className='mb-4 text-lg text-slate-500'>
          {toDateString(metadata.created)}
        </p>
        <div
          className={`prose prose-lg mb-8 ${inlineCodeClasses} ${headingAnchorClasses}`}
        >
          <Markdown content={content} />
        </div>
        <Link
          href='/blog'
          className='text-lg text-blue-500 hover:text-blue-600 hover:underline'
        >
          ← Back to Blog
        </Link>
      </main>
      <Footer />
    </div>
  );
}
