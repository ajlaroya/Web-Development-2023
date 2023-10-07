import DoubleCard from "./DoubleCard";
import DoublePeekCard from "./DoublePeekCard";
import IntroCard from "./IntroCard";
import SingleBlogCard from "./SingleBlogCard";
import SingleCard from "./SingleCard";
import SingleFadeCard from "./SingleFadeCard";
import SingleInfoCard from "./SingleInfoCard";
import SinglePeekCard from "./SinglePeekCard";
import SingleTagCard from "./SingleTagCard";

const Content = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <IntroCard />
      <DoubleCard />
      <SingleCard />
      <SinglePeekCard />
      <SingleBlogCard />
      <SingleInfoCard />
      <SingleTagCard />
      <DoublePeekCard />
      <SingleFadeCard />
    </div>
  );
};

export default Content;
