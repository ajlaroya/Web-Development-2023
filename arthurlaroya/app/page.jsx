import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  Skills,
} from "../sections";

import client from "../client";

async function getProjects() {
  const res = await client.fetch(`
  *[_type == "project"]{
    desc,
    externUrl,
    githubUrl,
    "imageUrl": image.asset->url,
    slug,
    tags,
    tech,
    title
  }
`);

  return res;
}

async function getSkills() {
  const res = await client.fetch(`
  *[_type == 'skill']{
    skill,
    "imageUrl": logo.asset->url
  }
`);

  return res;
}

export default async function Page() {
  const projects = await getProjects();
  const skills = await getSkills();

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0"/>
        <Explore projects={projects} />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0"/>
        <WhatsNew />
      </div>
      <Skills skills={skills} />
      <div className="relative">
        <Insights />
          <div className="gradient-04 z-0"/>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
