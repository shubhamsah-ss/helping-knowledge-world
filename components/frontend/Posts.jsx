"use client"
import Link from "next/link";
import Heading from "./Heading";
import LoadMoreBtn from "./LoadMoreBtn";
import PostCard from "./PostCard";
import { useState } from "react";

/**
 * LOAD MORE LOGIC REPROGRAMMING NEEDED
 */

export default function Posts({ posts }) {
  const [page, setPage] = useState(0)
  const postPerPage = 4
  const limit = (page+1)*postPerPage
  const displayedPosts = posts.slice(0, limit);

  const clickHandler = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="space-y-10">
      <Heading heading={"Recent Posts"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayedPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCard img={post.image} heading={post.heading} />
          </Link>
        ))}
      </div>
      <div className="md:w-1/4 mx-auto">
        <LoadMoreBtn
          clickHandler={clickHandler}
          isLoading={false}
          title={"More posts"}
          loadingTitle={"Loading more posts..."}
        />
      </div>
    </div>
  );
}
