import SectionTitle from "./section-title";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Connect() {
  return (
    <>
      <SectionTitle title="CONNECT WITH ME" />
      <div className="lg:flex mt-1 gap-1 w-full">
        <Link href="https://github.com/rezha4" className="flex-grow" target="_blank">
          <Button variant="outline" size="sm" className="w-full mt-1 sm:mt-0">
            GitHub
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/rezha-bahari/" className="flex-grow" target="_blank">
          <Button variant="outline" size="sm" className="w-full mt-1 sm:mt-0">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://www.threads.com/@rezhabahari" className="flex-grow" target="_blank">
          <Button variant="outline" size="sm" className="w-full mt-1 sm:mt-0">
            Threads
          </Button>
        </Link>
      </div>
    </>
  );
}
