import Image from "next/image";

export default function Banner() {
  return (
    <div>
        <Image
          src={"/banner.jpg"}
          alt="banner image"
          width={1000}
          height={1000}
          priority={true}
          className="w-full h-full md:h-[300px] lg:h-[450px] mx-auto object-contain md:object-fill"
        />
    </div>
  );
}
