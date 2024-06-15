import Image from "next/image";
import React from "react";

export default function PostCard({ img, heading }) {
  return (
    <div className="shadow-md shadow-yellow-600/20 dark:shadow-green-600/20 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer hover:-translate-y-2 transition-all delay-100">
      <Image
        src={img}
        alt="banner image"
        width={500}
        height={500}
        className="object-contain rounded-t-lg"
      />
      <div className="p-5 text-justify">
        <h4 className="text-lg font-semibold">{heading}</h4>
      </div>
    </div>
  );
}
