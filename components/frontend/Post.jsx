import Link from "next/link";
import React from "react";
import Heading from "./Heading";

export default function Posts({ posts = [] }) {
  const MAX_WORDS = 50;

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > MAX_WORDS) {
      return (
        <p className="text-base leading-6">
          {words.slice(0, MAX_WORDS).join(" ")}
          <Link href={"#"} className="ms-2 text-blue-500 hover:text-blue-700">
            Read more...
          </Link>
        </p>
      );
    }
    return (
      <p className="text-base leading-6">{content}</p>
    );
  };

  return (
    <div className="space-y-5">
      <Heading heading={"Recent Affairs"} />
      <div className="space-y-4 sm:container sm:mx-auto h-[750px] overflow-auto">

      {posts.map((post, i) => (
        <div key={i} className="space-y-4">
          <div className="flex flex-col gap-3 text-justify bg-slate-100/50 dark:bg-slate-800/30 p-5">
            <h4 className="text-lg font-semibold">{post.heading}</h4>
            {truncateContent(String(post.content))}
          </div>
            <hr className="border-2 dark:border-slate-700" />
        </div>
      ))}
      </div>

      
    </div>
  );
}
