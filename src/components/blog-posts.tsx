import { prisma } from "@/lib/prisma";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { fetchEntries } from "@/lib/contentful";

const BlogPosts = async () => {
  const blogEntries = await fetchEntries();
  // only 4 latest blog

  return (
    <div className="py-12 mx-auto px-4 space-y-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-hand">
        Blogs
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {blogEntries.map((entry: any) => (
          <Card key={entry.sys.id}>
            <CardHeader>
              <CardTitle className="min-h-14 leading-5">
                {entry.fields.title}
              </CardTitle>
              <CardDescription>
                {entry.fields.title !==
                "Hosting Next.js 14 on Github Pages"
                  ? new Date(entry.sys.updatedAt)
                      .toLocaleString("id-ID", { timeZone: "UTC" })
                      .replace(",", "")
                      .replace(/\//g, "-")
                  : "16-06-2024 12.00.00"}
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-20">
              <p>
                {entry.fields.tags.map(
                  (tag: string, index: number) => (
                    <span key={index}>#{tag} </span>
                  )
                )}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${entry.sys.id}`}>
                <Button>Read more</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
