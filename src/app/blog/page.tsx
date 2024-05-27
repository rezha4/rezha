import { prisma } from "@/lib/prisma"

const BlogPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      blog page
      {JSON.stringify(posts)}
    </div>
  )
}

export default BlogPage
