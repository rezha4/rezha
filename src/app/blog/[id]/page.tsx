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
  return (
    <div>
      youre at {params.id} {JSON.stringify(currentPost)}
      <h1 className="text-2xl">{currentPost?.title}</h1>
      <p>{currentPost?.content}</p>
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
