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
        a: ({ node, ...props }) => (
          <a {...props} target='_blank' rel='noopener noreferrer'>
            {props.children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
