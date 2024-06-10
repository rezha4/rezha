"use server";
import { prisma } from "@/lib/prisma";
import { BlogPost } from "./page";

export async function createPost(datas: BlogPost) {
  console.log("title", datas.title);
  console.log("content", datas.content);
  console.log("tags", datas.tags);

  try {
    const blogpost = await prisma.post.create({
      data: {
        title: datas.title,
        content: datas.content,
        tags: datas.tags,
        published: false
      }
    });

    if (blogpost) {
      console.log("blogpost saved", blogpost);
    }
  } catch (error) {
    console.error("error saving blog post", error);
  }
}