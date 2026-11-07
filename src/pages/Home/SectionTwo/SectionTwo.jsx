import Title from "../../../components/Title/Title";
import About from "../../../assets/About.png";
import Buttons from "../../../components/Buttons/Buttons";
import arrow from "../../../assets/arrow.svg";

function SectionTwo() {
  return (
    <section className="mx-2.5 md:mx-5 lg:mx-20">
      <div>
        <Title title={"About Grand Atlas"} hs={"mt-16 md:mt-[180px]"} ds={"mb-[65px]"} />
      </div>
      <div className="flex flex-col justify-center items-center md:flex md:flex-col lg:flex lg:flex-row lg:justify-around gap-10">
        <img
          src={About}
          alt="About img"
          className="w-full lg:w-1/2 min-w-0 rounded-t-[100px] border-[5px] border-[#8E1616] max-w-168.25 h-80 md:h-167 object-cover"
        />
        <div className="flex flex-col justify-center lg:justify-between items-center lg:items-start w-full lg:w-1/2 min-w-0 gap-2 lg:gap-10 max-w-156">
          <p className="text-[#554E4E] text-base md:text-lg lg:text-lg xl:text-[24px] lg:leading-relaxed font-lato font-medium text-justify">
            We began with a singular, uncompromising vision: to bridge the gap
            between world-class architecture and the individuals who define our
            global culture. We recognized that for the discerning client, a home
            is rarely just a physical structure; it is a curated environment, a
            private gallery, and the ultimate expression of a life well-lived.
            Our journey started not in the pursuit of transactions, but in the
            pursuit of excellence. We set out to dismantle the traditional,
            high-volume real estate model in favor of a bespoke, 'private
            office' approach—one where quality always supersedes quantity, and
            where every client is treated as the sole focus of our firm, We
            don't just find you a home; we secure your peace of mind through a
            veil of absolute professional confidentiality
          </p>
          <Buttons
            btnTitle={"Know More"}
            btnStyle={
              "font-lato text-[#ffffff] py-3 pl-[68px] pr-[85px] flex items-center gap-2 whitespace-nowrap"
            }
            icon={arrow}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
