import { prisma } from "@/lib/prisma"
import Link from "next/link";

const BlogPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <h2 className="text-2xl md:text-4xl my-4">
        Welcome to my blog!
      </h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link className="transition-all duration-500 ease-in-out hover:scale-95 active:scale-100" href={`/blog/${post.id}`} key={post.id}>
            <div className="border rounded-md shadow-md p-2 space-y-2">
              <p className="text-xl font-semibold">{post.title}</p>
              <p>{post.tags}</p>
              <p>{JSON.stringify(post.createdAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage
