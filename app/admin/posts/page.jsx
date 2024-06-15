import PostCard from '@/components/frontend/PostCard'
import Heading from '@/components/frontend/Heading'
import React from 'react'
import MyImage from "@/public/banner.jpg"
import AddPost from './new/page'

export default function Posts() {
  return (
    <div className='space-y-10'>
      <Heading heading={"Posts"} />
      {/* Add posts */}
      <AddPost />

      {/* All posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <PostCard img={MyImage} heading={"Heading"} />
        <PostCard img={MyImage} heading={"Heading your friendly destination for simplified information on government examinations. We are a group of enthusiasts committed to assistingbeginners in u "} />
        <PostCard img={MyImage} heading={"Heading"} />
        <PostCard img={MyImage} heading={"Heading"} />
        <PostCard img={MyImage} heading={"Heading"} />
        <PostCard img={MyImage} heading={"Heading"} />
      </div>
    </div>
  )
}
