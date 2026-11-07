import success1 from "../../../assets/success1.svg";
import success2 from "../../../assets/success2.svg";
import success3 from "../../../assets/success3.svg";
import success4 from "../../../assets/success4.svg";
import Title from "../../../components/Title/Title";
function SectionOne() {
  return (
    <section>
      <Title
        title={"Benchmarks of success"}
        hs={"mt-[123px]"}
        ds={"mb-[56px]"}
      />
      <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-5.5 mx-auto w-full  ">
        <div className="flex flex-col justify-center items-center w-full min-h-35.75 text-center border border-[#CEC7C7] rounded-xl shadow-SectionOne py-2.5 px-3 gap-2">
          <img src={success1} alt="" />
          <h4>48</h4>
          <p>Properties Managed</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full min-h-35.75 text-center border border-[#CEC7C7] rounded-xl shadow-SectionOne py-2.5 px-3 gap-3">
          <img src={success2} alt="" />
          <h4>90M</h4>
          <p>Total Managed Investments</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full min-h-35.75 text-center border border-[#CEC7C7] rounded-xl shadow-SectionOne py-2.5 px-3 gap-3">
          <img src={success3} alt="" />
          <h4>500</h4>
          <p>Happy Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full min-h-35.75 text-center border border-[#CEC7C7] rounded-xl shadow-SectionOne py-2.5 px-3 gap-3">
          <img src={success4} alt="" />
          <h4>99%</h4>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
