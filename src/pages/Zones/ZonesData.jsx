import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Map2 from "../../assets/Map2.svg";

function ZonesData() {
  const { id } = useParams();
  const [zone, setZone] = useState("");
  const [loading, setLoading] = useState(true);

  const getZoneData = async () => {
    try {
      const response = await api.get(`/zone/${id}`);
      setZone(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getZoneData();
  }, [id]);
  if (loading) {
    <h1>loading...</h1>;
  }
  if (!zone) {
    <h1>Unit Not Found</h1>;
  }

  return (
    <div className="mx-10">
      <div>
        <img className="w-full h-64 md:h-[525px] object-cover rounded-lg" src={zone.images} />

        <section className="flex flex-col gap-4 md:flex-row md:justify-between my-10 md:my-[69px]">
          <div>
            <p className="font-lato font-bold text-2xl md:text-[40px] text-[#8E1616]">
              {zone.description_en}
            </p>
            <div className="flex gap-1">
              <img src={Map2} />
              <p className="font-lato font-medium text-[20px] text-[#847D7D]">
                Minusio, Lake Maggiore, Switzerland — ref. LOC1771
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#A18E77] font-lato font-bold text-2xl md:text-[40px] ">
              {zone.city_en}
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16 lg:mb-[148px]">
            <div>
              <p className="font-lato font-bold text-[#1D1616] text-[26px] mb-[25px]">
                At a glance
              </p>
              <ul className="list-disc list-inside">
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Plot size ca.: 589 m²
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Living area ca.: 300 m²
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Bedrooms: 3
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Bathrooms: 3
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Living rooms: 2
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  WC: 1
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] ">
                  External parking: 3, covered
                </li>
              </ul>
            </div>
            <div>
              <p className="font-lato font-bold text-[#1D1616] text-[26px] mb-[25px]">
                Overview
              </p>
              <p className="font-lato text-[#847D7D] text-[26px] mb-[62px]">
                Nestled in a residential area of Minusio, this magnificent
                historic villa is for sale, fully renovated and ready to move
                in. The spacious living areas, flooded with natural light thanks
                to perfect sun exposure, create a unique and welcoming
                atmosphere. A well-maintained, low-maintenance garden provides
                the ideal setting for enjoying outdoor gatherings. Its proximity
                to essential services and public transport also makes the villa
                an ideal choice for families.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ZonesData;
