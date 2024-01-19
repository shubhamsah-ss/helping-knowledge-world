import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const socialLinks = [
    {
      src: "./youtube.svg",
      href: "https://www.youtube.com/@helpingknowledgeworld1539",
    },
    {
        src: "./facebook.svg",
        href: "https://www.facebook.com/profile.php?id=100063694640313",
      },
  ];
  
  return (
    <footer
      className="
    drop-shadow-md p-5 w-full
    bg-slate-300 dark:bg-slate-800
    text-black dark:text-slate-300
    "
    >
      <div className="grid grid-flow-col">
        {/* <div className="w-fit space-y-3">
          <h2 className="text-4xl">Follow us</h2>
          <div className="grid grid-flow-col">
            {socialLinks.map((item, i) => (
              <Link key={i} target="_blank" href={item.href} className="w-fit">
                <Image
                  src={item.src}
                  alt={item.href}
                  width={100}
                  height={100}
                  className="w-10 h-10 object-contain aspect-video hover:-translate-y-1 transition-all ease-in-out delay-200 hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div> */}

        <h2 className="text-4xl">Follow us</h2>
        <div className="flex justify-center items-center gap-4">
            {socialLinks.map((item, i) => (
              <Link key={i} target="_blank" href={item.href} className="w-fit">
                <Image
                  src={item.src}
                  alt={item.href}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover aspect-video hover:-translate-y-1 transition-all ease-in-out delay-200 hover:scale-125"
                />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
