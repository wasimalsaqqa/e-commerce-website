import Hero from "../../components/Hero section/Hero";
import dev from "../../assets/dev.png";
import Future1 from "../../assets/Future1.png";
import Future2 from "../../assets/Future2.png";
import CardLogo1 from "../../assets/CardLogo1.svg";
import CardLogo2 from "../../assets/CardLogo2.svg";
import FutureCards from "../../components/Cards/FutureCards";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ROW_IMAGES = [
  [Future1, Future2, Future1], 
  [Future1, Future2, Future1], 
  [Future1, Future2, Future1], 
];

function Developers() {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDeveloper = async () => {
    try {
      const response = await api.get("/developer");
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      setDevelopers(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeveloper();
  }, []);

  if (loading) {
    return <h1 className="text-center my-20 text-2xl font-lato">loading...</h1>;
  }

  if (!developers || developers.length === 0) {
    return <h1 className="text-center my-20 text-2xl font-lato">developer Not Found</h1>;
  }

  const baseThreeDevelopers = developers.slice(0, 3);

  return (
    <div>
      <Hero
        bg={dev}
        title={"Defining the Future Skyline."}
        desc={
          "Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        }
        icons={true}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 my-16 md:my-[87px] space-y-8">
        {ROW_IMAGES.map((rowImgs, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {baseThreeDevelopers.map((developer, colIndex) => {
              const isMiddleCard = colIndex === 1;

              return (
                <div
                  key={`${rowIndex}-${developer.id || colIndex}`}
                  className="[&_img.w-full]:h-[220px] [&_img.w-full]:object-cover"
                >
                  <FutureCards
                    id={developer.id}
                    imgSrc={rowImgs[colIndex]}
                    logo={isMiddleCard ? CardLogo2 : CardLogo1}
                    logoHeader={isMiddleCard ? "Hayah City" : undefined}
                    logoTitle={isMiddleCard ? "Hayah Development" : undefined}
                    btn={
                      <button
                        type="button"
                        onClick={() => navigate(`/developers/${developer.id}`)}
                        className="w-full border border-[#8E1616] text-[#8E1616] hover:bg-[#8E1616] hover:text-white font-lato text-sm font-medium py-2.5 rounded-md transition-colors cursor-pointer"
                      >
                        View Projects
                      </button>
                    }
                  />
                </div>
              );
            })}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Developers;