import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import { Document } from "@contentful/rich-text-types";
import StickyContact from "@/components/shared/sticky-contact";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

async function fetchEntry(id: string) {
  try {
    return await client.getEntry(id);
  } catch (error) {
    console.error("Error fetching Contentful entry:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
    });
    return entries.items.map((entry) => ({
      id: entry.sys.id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const entry = await fetchEntry(params.id);

  if (!entry) {
    return <div>Blog post not found or error loading content.</div>;
  }

  return (
    <>
      <StickyContact />
      <div className="p-8 mt-8">
        <h1 className="text-2xl lg:text-4xl mb-4">
          {entry.fields.title as ReactNode}
        </h1>
        <p className="text-gray-500 mb-8">
          Tags:{" "}
          {Array.isArray(entry.fields.tags) &&
            entry.fields.tags.join(", ")}
        </p>
        <div className="prose dark:prose-invert max-w-none">
          {documentToReactComponents(
            entry.fields.content as Document
          )}
        </div>
      </div>
    </>
  );
}
