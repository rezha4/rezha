import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Blog = {
  id: string;
  title: string;
  date: string;
  slug: string;
  tags: string[];
};

const contentDir = path.join(process.cwd(), "src/content");

export default function getPosts() {
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  return files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: filename.replace(/\.md$/, ""),
      ...data,
    } as Blog;
  });
}
