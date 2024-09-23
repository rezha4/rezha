import { fetchEntries } from '../../lib/contentful';
import Link from 'next/link';

export async function generateStaticParams() {
  const entries = await fetchEntries();
  return entries.map((entry) => ({
    id: entry.sys.id
  }));
}

export default async function BlogPage() {
  const blogEntries = await fetchEntries();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogEntries.map((entry: any) => (
          <li key={entry.sys.id}>
            <h2>{entry.fields.title}</h2>
            <p>{entry.fields.excerpt}</p>
            <Link href={`/blog/${entry.sys.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}