import Heading from "@/components/frontend/Heading";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div id="stages" className="space-y-5">
        <Heading heading={"Stages"} />
      </div>
      <div id="syllabus" className="space-y-5">
        <Heading heading={"Syllabus"} />
      </div>
      <div id="resources" className="space-y-5">
        <Heading heading={"Resources"} />
      </div>
      <div id="notifications" className="space-y-5">
        <Heading heading={"Notifications"} />
      </div>
    </div>
  );
}
