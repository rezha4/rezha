import StickyContact from "@/components/shared/sticky-contact";
import { fetchEntries } from "../../lib/contentful";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const entries = await fetchEntries();
  return entries.map((entry) => ({
    id: entry.sys.id,
  }));
}

export default async function BlogPage() {
  const blogEntries = await fetchEntries();

  return (
    <>
      <StickyContact />
      <div className="p-8 mt-8">
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
    </>
  );
}
