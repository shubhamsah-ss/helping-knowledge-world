import Banner from "@/components/frontend/Banner";
import CourseCard from "@/components/frontend/CourseCard";
import Heading from "@/components/frontend/Heading";
import Posts from "@/components/frontend/Posts";
import MyImage from "@/public/banner.jpg"


export default function Home() {
  const cardItems = [
    {
      title: "UPSC",
      icon: "/upsc.jpg",
      href: "/upsc",
    },
    {
      title: "State PSC",
      icon: "/upsc.jpg",
      href: "/state-psc",
    },
    {
      title: "Defense  Forces",
      icon: "/upsc.jpg",
      href: "/defense-forces",
    },
  ];

  const posts = [
    {
      id: 1,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 2,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 3,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 4,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 5,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 6,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 7,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
      id: 8,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 9,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 10,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
      id: 11,
      image: MyImage,
      heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
  ];

  return (
    <div className="space-y-10">

      <Banner />

      <Heading heading={"Current Offered Courses"} />
      <div
        className={`grid gap-5 ${
          cardItems.length > 4 ? "sm:grid-cols-4" : "sm:grid-flow-col"
        }`}
      >
        {cardItems.map((item, i) => (
          <CourseCard
            key={i}
            href={item.href}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
      <Posts posts={posts} /> 
    </div>
  );
}
