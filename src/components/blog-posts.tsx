import { prisma } from "@/lib/prisma";

const BlogPosts = async() => {
  const posts = await prisma.post.findMany();

  return (
    <div className="py-12 mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold">/Blogs</h2>
      
      {JSON.stringify(posts)}
    </div>
  );
};

export default BlogPosts;
