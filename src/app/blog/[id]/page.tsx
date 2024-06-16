import { prisma } from "@/lib/prisma";
import DOMPurify from "dompurify";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const currentPost = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!currentPost) return <p>Error fetching content</p>

  // const sanitizedContent = DOMPurify.sanitize(currentPost?.content);

  return (
    <div>
      {/* youre at {params.id} {JSON.stringify(currentPost)} */}
      <h1 className="text-2xl">{currentPost?.title}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: currentPost?.content }} />
      <p className="text-xs">{currentPost?.tags}</p>
      <p>
        Created on:{" "}
        {new Date(currentPost?.createdAt as Date).toLocaleDateString(
          undefined,
          { year: "numeric", month: "long", day: "numeric" }
        )}
      </p>
    </div>
  );
};

export default BlogPost;
