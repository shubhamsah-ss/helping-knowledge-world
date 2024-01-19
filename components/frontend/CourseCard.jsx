import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ icon, title, href, className }) => {
  return (
    <div
      className={`card shadow-md shadow-yellow-600/20 dark:shadow-green-600/20 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg ${className}`}
    >
      <div className={`first flex flex-col items-center gap-3 p-5`}>
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="w-20 h-20 object-contain aspect-video"
        />
        <div>
          <h2 className="text-lg xl:text-2xl">{title}</h2>
        </div>
      </div>

      <div className="second text-sm w-full">
        <div
          className={`flex flex-col md:flex-row items-center justify-evenly`}
        >
          <Link
            href={`${href}#stages`}
            className="hover:underline hover:text-yellow-600 dark:hover:text-green-600"
          >
            Stages
          </Link>
          <Link
            href={`${href}#syllabus`}
            className="hover:underline hover:text-yellow-600 dark:hover:text-green-600"
          >
            Syllabus
          </Link>
          <Link
            href={`${href}#resources`}
            className="hover:underline hover:text-yellow-600 dark:hover:text-green-600"
          >
            Resources
          </Link>
          <Link
            href={`${href}#notifications`}
            className="hover:underline hover:text-yellow-600 dark:hover:text-green-600"
          >
            Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
