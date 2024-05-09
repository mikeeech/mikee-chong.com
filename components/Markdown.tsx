import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFormatter from "remark-frontmatter";
import remarkMdxFormatter from "remark-mdx-frontmatter";
import remarkToc from "remark-toc";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="py-5"
      remarkPlugins={[remarkFormatter, remarkMdxFormatter, remarkToc]}
      rehypePlugins={[
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}
