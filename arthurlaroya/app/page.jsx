import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Header from "../components/Header";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
    <div className="relative min-h-screen">
      <Nav />
      <Header />
      <Landing />
      <Work projects={data} />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
}
