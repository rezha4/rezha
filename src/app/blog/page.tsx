import { prisma } from "@/lib/prisma"
import { formatDateTime, formatTagsToArray } from "@/lib/utils";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="border rounded-md shadow-md p-2 space-y-2">
              <p className="text-xl font-semibold text-center">
                {post.title}
              </p>
              <div className="flex gap-2">
                {formatTagsToArray(post.tags).map((tag, index) => (
                  <div key={index} className="border rounded-full px-2">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <p>{formatDateTime(post.createdAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage
