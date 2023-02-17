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

  return res
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="relative bg-[#F2F2F2] min-h-screen">
      <Nav />
      <Header />
      <Landing />
      <Work projects={data} />
      <Skills />
      <Contact />
    </div>
  );
}
