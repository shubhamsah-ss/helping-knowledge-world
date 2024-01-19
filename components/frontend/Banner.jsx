"use client";
import { makeGetRequest } from "@/lib/apiRequest";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner({ status, setStatus }) {
  const [banner, setBanner] = useState(null);

  async function getBanner() {
    try {
      const timestamp = new Date().getTime(); // Add a timestamp as a cache buster
      const bannerData = await makeGetRequest(
        `banners/current?timestamp=${timestamp}`
      );
      console.log("Banner Data:", bannerData);
      setBanner(bannerData);
      setStatus(false);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  }

  useEffect(() => {
    getBanner();
  }, [status]);

  return (
    <div>
      {banner && (
        <Image
          src={banner.image[0]}
          alt="banner image"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full md:h-[300px] lg:h-[450px] mx-auto object-contain md:object-fill"
        />
      )}
    </div>
  );
}
