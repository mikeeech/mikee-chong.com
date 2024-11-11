import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkFormatter from "remark-frontmatter";
import remarkMdxFormatter from "remark-mdx-frontmatter";
import remarkToc from "remark-toc";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkFormatter, remarkMdxFormatter, remarkToc]}
      rehypePlugins={[rehypeSlug]}
      components={{
        a: ({ href, children, ...props }) => (
          <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...props}
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}