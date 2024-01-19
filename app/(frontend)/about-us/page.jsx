import Heading from "@/components/frontend/Heading";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div className="space-y-20">
      {/* ABOUT US */}
      <div className="space-y-5 text-sm sm:text-base">
        <Heading heading={"About Us"} />
        <p className="text-justify first-letter:text-3xl first-letter:font-bold">
          Welcome to{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>{" "}
          - your friendly destination for simplified information on government
          examinations. We are a group of enthusiasts committed to assisting
          beginners in understanding the ins and outs of various government
          examinations. At{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>
          , we recognize the challenges newcomers face and aim to make
          exam-related information accessible and easy to comprehend. We are
          providing information regarding specific government examinations for
          now and we are trying our best to expand our platform to provide more.
        </p>
        <p>
          While we are not affiliated with any government agency, our team is
          dedicated to providing straightforward and beginner-friendly content
          to aid you on your exam preparation journey. Think of us as your study
          buddy, here to break down complex details and guide you through the
          basics of government exams.
        </p>

        <p>
          Remember,{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>{" "}
          is your starting point for essential insights and tips. We&apos;re
          excited to be a part of your learning adventure, supporting you as you
          take your first steps toward government examination success.
        </p>

        <p className="font-serif">
          Wish you a lot of luck from{" "}
          <i className="italic font-bold">Helping Knowledge World</i> team.
        </p>
      </div>

      {/* DISCLAIMER */}
      <div className="space-y-5">
        <Heading heading={"Disclaimer"} />
        <p>
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>
          , a platform dedicated to providing information about government
          examinations. We want to emphasize that while we strive to offer
          accurate, timely, and reliable information, the content on our website
          is intended for general informational purposes only. We are not
          affiliated with any government organization, examination authority, or
          official entity.
        </p>
        <p>
          The information provided on{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>{" "}
          is based on publicly available sources and our team&apos;s efforts to
          present it in an understandable manner. However, we cannot guarantee
          the completeness, accuracy, or reliability of the information. Users
          are encouraged to independently verify details from official sources
          before making any decisions based on the information provided on our
          platform.
        </p>

        <p>
          It&apos;s important to note that government examination processes are
          subject to change, and official announcements should be the primary
          source for the latest updates.{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>{" "}
          disclaims any liability for errors or omissions in the content and is
          not responsible for any decisions made based on the information
          provided.
        </p>

        <p className="text-justify first-letter:text-3xl first-letter:font-bold">
          Our platform,{" "}
          <Link href={"#"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>{" "}
          is only for information guidance regarding government examinations and
          not supposed to affiliated or promote any other platforms or
          materials.
        </p>

        <p>
          Users should use their discretion and consider seeking professional
          advice or official confirmation when in doubt. By using{" "}
          <Link href={"/"} className="text-yellow-600 dark:text-green-600">
            Helping Knowledge World
          </Link>
          , you acknowledge and agree to the terms of this disclaimer.
        </p>
      </div>

      <h3 className="text-center text-6xl font-mono capitalize">Thank You!</h3>
    </div>
  );
}
