import Future1 from "../../../assets/Future1.png";
import Future2 from "../../../assets/Future2.png";
import CardLogo1 from "../../../assets/CardLogo1.svg";
import CardLogo2 from "../../../assets/CardLogo2.svg";
import Title from "../../../components/Title/Title";
import FutureCards from "../../../components/Cards/FutureCards";
import DetailsBtn from "../../../components/Buttons/DetailsBtn";
import CardSlider from "../../../components/Slider/CardSlider";

function SectionFive() {
  return (
    <section className="mb-36.25 w-full max-w-7xl mx-auto px-4 [&_button:has(svg)]:hidden">
      <Title title={"Future Landmarks"} hs={"mt-16 md:mt-[180px]"} ds={"mb-[38px]"} />
      <CardSlider label="Future landmarks">
        <FutureCards imgSrc={Future1} logo={CardLogo1} btn={<DetailsBtn />} />
        <FutureCards
          imgSrc={Future2}
          logo={CardLogo2}
          logoHeader={"Hayah City"}
          logoTitle={"Hayah Development"}
          btn={<DetailsBtn />}
        />
        <FutureCards imgSrc={Future1} logo={CardLogo1} btn={<DetailsBtn />} />
      </CardSlider>
    </section>
  );
}

export default SectionFive;