import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkFormatter from 'remark-frontmatter';
import remarkMdxFormatter from 'remark-mdx-frontmatter';
import remarkToc from 'remark-toc';

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkFormatter, remarkMdxFormatter, remarkToc]}
      rehypePlugins={[
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ]}
      components={{
        a: ({ node, href, ...props }) => {
          const isDeepLink = href?.startsWith('http') || href?.startsWith('//');

          return (
            <a
              {...props}
              href={href}
              target={isDeepLink ? '_blank' : undefined}
              rel={isDeepLink ? 'noopener noreferrer' : undefined}
            >
              {props.children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
