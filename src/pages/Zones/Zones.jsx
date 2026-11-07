import Hero from "../../components/Hero section/Hero";
import mainzone from "../../assets/mainzone.png";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Zones() {
  const navigate = useNavigate();
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const getZones = async () => {
    try {
      const response = await api.get("/zone");
      setZones(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getZones();
  }, []);

  return (
    <div>
      <Hero
        bg={mainzone}
        title={"Destinations Defined by Distinction"}
        desc={
          "From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
        }
        icons={true}
      />
      <section className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 mx-4 md:mx-15 my-[87px]">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          zones.map((zone) => {
            return (
              <img
                key={zone.id}
                src={zone.images}
                className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full h-[220px] object-cover rounded-2xl"
                onClick={() => navigate(`/zones/${zone.id}`)}
              />
            );
          })
        )}
      </section>
    </div>
  );
}

export default Zones;
