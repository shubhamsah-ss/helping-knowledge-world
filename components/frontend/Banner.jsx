"use client";
import { makeGetRequest } from "@/lib/apiRequest";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner({ status, setStatus }) {
  const [banner, setBanner] = useState(null);

  async function getBanner() {
    try {
      const bannerData = await makeGetRequest(
        `banners/current`
      );

      setBanner(bannerData);
      if (setStatus) setStatus(false);
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
          unoptimized
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
