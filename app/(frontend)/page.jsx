import Banner from "@/components/frontend/Banner";
import CourseCard from "@/components/frontend/CourseCard";
import Heading from "@/components/frontend/Heading";
import Posts from "@/components/frontend/Post";

class Post {
  constructor(id) {
    this.id = id;
    this.heading = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci perspiciatis quia hic consectetur aliquid repudiandae dignissimos delectus, doloremque sint suscipit ipsa rerum soluta. Placeat iure natus delectus quisquam rem.`;
    this.content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptate sequi quisquam laborum. Fuga qui eius quo doloribus odit quod, dolorem quos fugit. Corporis, sit amet obcaecati tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, inventore corporis. Accusamus magni, maiores dolores in consectetur pariatur! Nisi, deserunt soluta explicabo nesciunt aut molestias et. Ab consequatur beatae omnis. a eligendi.`;
  }
}

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

  const posts = [];

  for (let i = 0; i < 10; i++) {
    const obj = new Post(i + 1);
    posts.push(obj);
  }

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
