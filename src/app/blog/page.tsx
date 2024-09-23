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
  console.log(blogEntries);

  return (
    <>
      <StickyContact />
      <div className="p-8 mt-8">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {blogEntries.map((entry: any) => (
            <Card key={entry.sys.id}>
              <CardHeader>
                <CardTitle>{entry.fields.title}</CardTitle>
                <CardDescription>
                  {entry.sys.updatedAt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Tags:</p>
                <ul className="flex gap-1 flex-wrap text-gray-400">
                  {entry.fields.tags.map(
                    (tag: string, index: number) => (
                      <li key={index}>{tag}</li>
                    )
                  )}
                </ul>
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
