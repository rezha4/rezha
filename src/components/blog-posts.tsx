import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import getPosts from "@/lib/get-posts";
import { formatDate } from "@/lib/utils";
import BlogCard from "./shared/blog-card";

const BlogPosts = async () => {
  const blogs = getPosts().slice(0, 3);

  return (
    <div className="py-12 mx-auto px-8 lg:px-40 space-y-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">
        Blogs
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
