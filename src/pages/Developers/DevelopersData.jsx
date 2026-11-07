import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Title from "../../components/Title/Title";
import Future1 from "../../assets/Future1.png";
import villa from "../../assets/ProjectImg.png";

const CUSTOM_HERO_IMAGES = {
  lagoon: villa, 
  "HM Group": villa,
  elmorshedy: villa, 
};

const DEFAULT_BANNER_IMAGE = Future1;
const DEFAULT_PROJECT_IMAGE = Future1;

const FALLBACK_PROJECTS = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name_en: "Sawary Family Villa",
  units: "50 Units",
  gyms: "7 Gyms",
  area: "15,000m",
  description_en:
    "Experience the true meaning of modern living in this luxurious apartment featuring spacious rooms, elegant finishes, and breathtaking views.",
  image: DEFAULT_PROJECT_IMAGE,
}));

function DevelopersData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState(null);
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  const getDeveloperData = async () => {
    try {
      const response = await api.get(`/developer/${id}`);
      const rawData = response.data?.data || response.data;
      const devData = Array.isArray(rawData) ? rawData[0] : rawData;

      setDeveloper(devData);

      if (Array.isArray(devData?.projects) && devData.projects.length > 0) {
        setProjects(devData.projects);
      }
    } catch (err) {
      console.log("Error fetching developer by ID:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeveloperData();
  }, [id]);

  if (loading) {
    return <h1 className="text-center my-20 text-2xl font-lato">loading...</h1>;
  }

  if (!developer) {
    return (
      <h1 className="text-center my-20 text-2xl font-lato text-[#8E1616]">
        Developer Not Found
      </h1>
    );
  }

  const apiHeroImage = Array.isArray(developer.images)
    ? developer.images[0]
    : developer.images;

  const bannerImage =
    CUSTOM_HERO_IMAGES[developer.name_en] ||
    CUSTOM_HERO_IMAGES[developer.id] ||
    apiHeroImage ||
    DEFAULT_BANNER_IMAGE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
      <Title
        title={"Developers Projects"}
        hs={"mt-10 md:mt-16"}
        ds={"mb-10 md:mb-14"}
      />

      <div className="w-full mb-14 md:mb-20">
        <img
          className="w-full h-64 sm:h-96 md:h-[525px] object-cover rounded-2xl shadow-sm"
          src={bannerImage}
          alt={developer.name_en || "Developer Banner"}
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => {
          const projectImage = Array.isArray(project.images)
            ? project.images[0]
            : project.images || project.image || DEFAULT_PROJECT_IMAGE;

          return (
            <div
              key={project.id || index}
              className="bg-white border border-[#EAEAEA] rounded-2xl p-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full rounded-xl overflow-hidden">
                  <img
                    src={projectImage}
                    alt={project.name_en || "Sawary Family Villa"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#9A8873] py-3.5 px-1 border-b border-gray-100 font-lato">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 fill-current text-[#9A8873]" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 5h2v5h-2z"/>
                    </svg>
                    <span>{project.units || "50 Units"}</span>
                  </div>

                  <span className="text-gray-300">|</span>

                  {/* Gyms */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 fill-current text-[#9A8873]" viewBox="0 0 24 24">
                      <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 6.29 3.43 4.86 2 3.43 3.43 4.86 4.86 2 6.29 3.43 7.71 2 9.14 3.43 10.57 2 12 3.43 8.43 7 17 15.57 20.57 14.86zM2 19.5v-3h3v3H2zm3 1.5H2v2h3v-2zm14-16.5v3h3v-3h-3zm3 1.5h3v-2h-3v2z"/>
                    </svg>
                    <span>{project.gyms || "7 Gyms"}</span>
                  </div>

                  <span className="text-gray-300">|</span>

                  {/* Area */}
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#9A8873] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v18h18L3 3zm4 9.5L11.5 17H7v-4.5z" />
                    </svg>
                    <span>{project.area || "15,000m"}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#8E1616] mt-3.5 px-1">
                  {project.name_en || "Sawary Family Villa"}
                </h3>

                <p className="font-lato text-xs text-[#8C7A6B] leading-relaxed mt-2 mb-5 px-1 line-clamp-3">
                  {project.description_en ||
                    "Experience the true meaning of modern living in this luxurious apartment featuring spacious rooms, elegant finishes, and breathtaking views."}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  project.id && navigate(`/projects/${project.id}`)
                }
                className="w-full border border-[#8E1616] text-[#8E1616] hover:bg-[#8E1616] hover:text-white font-lato text-xs font-medium py-2.5 rounded-md transition-colors cursor-pointer"
              >
                View Details
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default DevelopersData;