import { Blog } from "@/lib/get-posts";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="min-h-14 leading-5">
          {blog.title}
        </CardTitle>
        <CardDescription>{formatDate(blog.date)}</CardDescription>
      </CardHeader>
      <CardContent className="min-h-20">
        <p>
          {Array.isArray(blog.tags) &&
            blog.tags.map((tag: string, index: number) => (
              <span key={index}>#{tag} </span>
            ))}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${blog.id}`}>
          <Button>Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
