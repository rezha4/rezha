import Footer from "@/components/shared/footer";
import { ModeToggle } from "@/components/shared/mode-toggle";
import StickyContact from "@/components/shared/sticky-contact";
import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="mb-8">
        <ModeToggle />
        <StickyContact />
      </div>
      <div className="min-h-[50vh] px-4 py-2">{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
