"use client";

import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { Writer } from "tinymce";
import { createPost } from "./create-post";
export interface BlogPost {
  title: string;
  content: string;
  tags: string;
}

const CreateBlog = () => {
  const editorRef = useRef<Writer>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSave = async () => {
    if (editorRef.current) {
      const datas: BlogPost = {
        title,
        tags,
        content: editorRef.current.getContent(),
      };
      createPost(datas);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2 max-w-[50vw]">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          className="border"
        />
        <label htmlFor="tags">Tags</label>
        <input
          onChange={(e) => setTags(e.target.value)}
          type="text"
          name="tags"
          className="border"
        />
      </div>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API}
        onInit={(_evt, editor) =>
          ((editorRef.current as any) = editor)
        }
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button onClick={log}>Log editor content</Button>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default CreateBlog;