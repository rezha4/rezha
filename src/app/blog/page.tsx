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
import { formatDate } from "@/lib/utils";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <div className="p-2 sm:p-8 mt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="group relative bg-zinc-900 h-80 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:cursor-pointer border border-zinc-800 hover:border-zinc-700">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-800 via-green-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Date */}
                  <div className="flex items-center text-sm text-zinc-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-100 transition-colors duration-300">
                    {post.title}
                  </h2>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors duration-200 border border-zinc-700"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Read More Link */}

                  <div className="inline-flex items-center text-zinc-300 font-semibold hover:text-white transition-colors duration-200">
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-700/0 group-hover:from-zinc-800/30 group-hover:to-zinc-700/10 transition-all duration-300 pointer-events-none"></div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <StickyContact />
    </>
  );
}
