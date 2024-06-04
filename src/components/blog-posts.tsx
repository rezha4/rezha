import { prisma } from "@/lib/prisma";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

const BlogPosts = async() => {
  const posts = await prisma.post.findMany();

  return (
    <div className="py-12 mx-auto px-4 space-y-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">
        Blogs
      </h2>
      {/* {JSON.stringify(posts)} */}
      <div className="flex justify-center items-center gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="max-w-80" >
              <CardHeader>
                <CardTitle>
                  <h4 className="text-xl">{post.title}</h4>
                </CardTitle>
                <p className="text-xs border w-fit p-1 rounded-xl">
                  {post.tags}
                </p>
              </CardHeader>
              <CardFooter>
                <p className="text-xs">
                  {JSON.stringify(post.createdAt)}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
