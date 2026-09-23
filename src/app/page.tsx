import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Selector from "@/components/Selector";
import Sectors from "@/components/Sectors";
import Statement from "@/components/Statement";
import Films from "@/components/Films";
import Letter from "@/components/Letter";
import Insights from "@/components/Insights";
import { services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Selector
        eyebrow="What we do"
        heading={services.heading}
        sub={services.sub}
        items={services.items}
      />
      <Statement />
      <Sectors />
      <Films />
      <Letter />
      <Insights />
    </>
  );
}
