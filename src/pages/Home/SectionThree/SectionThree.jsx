import Masterpieces1 from "../../../assets/Masterpieces1.png";
import Masterpieces2 from "../../../assets/Masterpieces2.png";
import Masterpieces3 from "../../../assets/Masterpieces3.png";
import Title from "../../../components/Title/Title";
import CardSlider from "../../../components/Slider/CardSlider";

const masterpieces = [
  { image: Masterpieces1, name: "Palm Hills Office No.3" },
  { image: Masterpieces2, name: "Hacienda Duplex No.4" },
  { image: Masterpieces3, name: "Sawary Family Villa" },
];

function SectionThree() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <Title
        title={"Hand-Selected Masterpieces"}
        hs={"mt-16 md:mt-[180px]"}
        ds={"mb-[39px]"}
      />
      <CardSlider label="Hand-selected masterpieces">
        {masterpieces.map((item) => (
          <div key={item.name} className="flex flex-col">
            <div className="overflow-hidden rounded-2xl">
              <img
                alt={item.name}
                src={item.image}
                draggable={false}
                className="w-full h-[250px] sm:h-[280px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-center font-heading font-semibold text-lg text-[#8E1616]">
              {item.name}
            </p>
          </div>
        ))}
      </CardSlider>
    </section>
  );
}

export default SectionThree;
