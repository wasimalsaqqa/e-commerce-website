import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Map2 from "../../assets/Map2.svg";
import UnitImgs from "../../components/UnitImgs/UnitImgs";

function UniteDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState("");
  const [loading, setLoading] = useState(true);
  const getUnitDetail = async () => {
    try {
      const response = await api.get(`/unit/${id}`);
      setUnit(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUnitDetail();
  }, [id]);




  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!unit) {
    return <h1> Unit Not Found</h1>;
  }
  return (
    <div className="mx-10">
      <UnitImgs key={unit.id} images={unit.images} title={unit.title_en} />
      <section className="flex flex-col gap-4 md:flex-row md:justify-between my-10 md:my-[69px]">
        <div>
          <p className="font-lato font-bold text-2xl md:text-[40px] text-[#8E1616]">
            {unit.title_en}
          </p>
          <div className="flex gap-1">
            <img src={Map2} />
            <p className="font-lato font-medium text-[20px] text-[#847D7D]">
              Minusio, Lake Maggiore, Switzerland — ref. LOC1771
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#A18E77] font-lato font-bold text-2xl md:text-[40px]">
            {unit.price}
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16 lg:mb-[148px]">
          <div>
            <p className="font-lato font-bold text-[#1D1616] text-lg md:text-[26px] mb-[25px]">
              At a glance
            </p>
            <ul className="list-disc list-inside">
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                Plot size ca.: 589 m²
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                Living area ca.: 300 m²
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                Bedrooms: 3
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                Bathrooms: 3
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                Living rooms: 2
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] pb-7.5">
                WC: 1
              </li>
              <li className="font-lato text-lg md:text-[26px] text-[#847D7D] ">
                External parking: 3, covered
              </li>
            </ul>
          </div>
          <div>
            <p className="font-lato font-bold text-[#1D1616] text-lg md:text-[26px] mb-[25px]">
              Overview
            </p>
            <p className="font-lato text-[#847D7D] text-lg md:text-[26px] mb-[62px]">
              Nestled in a residential area of Minusio, this magnificent
              historic villa is for sale, fully renovated and ready to move in.
              The spacious living areas, flooded with natural light thanks to
              perfect sun exposure, create a unique and welcoming atmosphere. A
              well-maintained, low-maintenance garden provides the ideal setting
              for enjoying outdoor gatherings. Its proximity to essential
              services and public transport also makes the villa an ideal choice
              for families.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-[16.5px] bg-[#02aa02] text-[#EEEEEE] rounded-xl cursor-pointer font-lato font-bold text-[20px]">
                Contact via WhatsApp
              </button>
              <button className="flex-1 py-[16.5px] border border-[#8E1616] text-[#8E1616] rounded-xl cursor-pointer font-lato font-bold text-[20px]">
                Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UniteDetails;
