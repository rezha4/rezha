import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import StickyContact from "@/components/shared/sticky-contact";

const contentDir = path.join(process.cwd(), "src/content");

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir);

  return files.map((filename) => ({
    id: filename.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { id: string };
}) {
  const filePath = path.join(contentDir, `${params.id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <StickyContact />
      <article>
        <div className="p-8 mt-8 lg:px-44">
          <h1 className="text-2xl lg:text-4xl mb-4">{data.title}</h1>
          <p className="text-gray-500 mb-8">
            Tags: {Array.isArray(data.tags) && data.tags.join(", ")}
          </p>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </>
  );
}
