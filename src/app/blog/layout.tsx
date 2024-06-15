import Footer from "@/components/shared/footer";
import { ModeToggle } from "@/components/shared/mode-toggle";
import StickyContact from "@/components/shared/sticky-contact";
import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <StickyContact />
      <div className="min-h-[50vh] p-8 mt-8">{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
