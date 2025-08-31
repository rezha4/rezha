import StickyContact from "@/components/shared/sticky-contact";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getPosts from "@/lib/get-posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <StickyContact />
      <div className="p-8 mt-8">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {posts.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <CardTitle className="min-h-14 leading-5">
                  {entry.title}
                </CardTitle>
                <CardDescription>
                  {entry.title !==
                  "Hosting Next.js 14 on Github Pages"
                    ? new Date(entry.date)
                        .toLocaleString("id-ID", { timeZone: "UTC" })
                        .replace(",", "")
                        .replace(/\//g, "-")
                    : "16-06-2024 12.00.00"}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-20">
                <p>
                  {Array.isArray(entry.tags) &&
                    entry.tags.map((tag: string, index: number) => (
                      <span key={index}>#{tag} </span>
                    ))}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${entry.id}`}>
                  <Button>Read more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
