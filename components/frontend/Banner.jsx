"use client"
import { makeGetRequest } from "@/lib/apiRequest";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner({ status, setStatus }) {
  
  const [banner, setBanner] = useState(null)
  if (status) console.log(status)

  async function getBanner() {
    try {
      const bannerData = await makeGetRequest("banners/current")
      console.log(bannerData)
      setBanner(bannerData)
      if(setStatus) setStatus(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBanner()
  }, [status])

  return (
    <div>
  {
    banner && <Image
    src={banner.image[0]}
    alt="banner image"
    width={1000}
    height={1000}
    priority={true}
    className="w-full h-full md:h-[300px] lg:h-[450px] mx-auto object-contain md:object-fill"
  />
  }        
    </div>
  );
}
