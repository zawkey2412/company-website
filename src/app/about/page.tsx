import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image"; // Import the correct component for the Image element

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="The About Us page provides more in-depth information about our company, its history, its team, and its culture. It is a place where visitors can learn more about our values and what makes us unique."
      />
      <section className="py-8 justify-center flex flex-wrap text-center px-20">
        <h2 className="text-2xl font-bold mb-4">
          Our Story: From Humble Beginnings to Epic Achievements
        </h2>
        <p className="text-gray-600">
          We weren't always the industry leaders we are today. Our journey began
          as a spark of an idea, a small team with a big dream. Dive into our
          story and discover the milestones that shaped our path, the challenges
          we overcame, and the triumphs that fueled our growth. It's a tale of
          innovation, resilience, and the unwavering pursuit of excellence.
        </p>
        <img
          src="/images/about/table-1.jpg"
          alt="Image 1"
          width={500}
          height={500}
          className="w-full my-4 mx-auto"
        />
      </section>

      <section className="py-8 justify-center flex flex-wrap px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Meet the Masterminds Behind the Magic
        </h2>
        <p className="text-gray-600">
          Every successful adventure requires a skilled party. Here, you'll
          encounter the brilliant minds and passionate individuals who make our
          company tick. From seasoned veterans to rising stars, our team brings
          a diverse range of expertise and experiences to the table. Together,
          we craft innovative solutions and push boundaries to achieve the
          extraordinary.
        </p>
        <Image
          src="/images/about/table-2.jpg"
          width={500}
          height={500}
          alt="Image 2"
          className="w-full my-4 mx-auto"
        />
      </section>

      <section className="py-8 justify-center flex flex-wrap px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Beyond Work: A Culture Where We Thrive
        </h2>
        <p className="text-gray-600">
          We believe work shouldn't just be a job, but a place where you can
          flourish. Our company culture fosters creativity, collaboration, and a
          shared passion for what we do. We celebrate individual strengths,
          encourage learning and growth, and prioritize a healthy work-life
          balance. Dive into our world and discover what it means to be part of
          a team that values both success and well-being.
        </p>
        <Image
          src="/images/about/table-3.jpg"
          width={500}
          height={500}
          alt="Image 3"
          className="w-full my-4 mx-auto"
        />
      </section>
    </>
  );
};

export default AboutPage;
