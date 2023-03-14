// import Nav from "../components/Nav";
// import Landing from "../components/Landing";
// import Header from "../components/Header";
// import Work from "../components/Work";
// import Skills from "../components/Skills";
// import Contact from "../components/Contact";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

import client from "../client";

async function getData() {
  const res = await client.fetch(`
  *[_type == "project"]
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
  const data = await getData();
  const skills = await getSkills();

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0"/>
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0"/>
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
          <div className="gradient-04 z-0"/>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
