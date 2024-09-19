import { prisma } from "@/lib/prisma";

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

  return (
    <div>
      <h1 className="text-4xl text-center my-8">{currentPost?.title}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: currentPost?.content }} />
      <p className="text-sm mt-8">Tags: {currentPost?.tags}</p>
      <p className="text-sm mt-2">
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
