import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projectService from "../../services/projectService";
import { useGetProjectFetch } from "../../hooks/useProjectsFetch";
import GalleryThumbnail from "../../components/GalleryThumbnail";
export default function ProjectDetail() {
  const route = useLocation().pathname.split("/")[2];
  // const project = projectService().filter((item) => item.url === route)[0];
  const [lang, setLang] = useState("ES");
  const { project } = useGetProjectFetch(route);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (project) setLoaded(true);
  }, [project]);
  if (loaded)
    return (
      <div className="relative page  loaded-page__animation p-4   ">
        <div className="w-full mx-auto  flex flex-col xl:flex-row">
          <div className="w-full lg:w-4/5 p-1">
            <GalleryThumbnail images={project.gallery} />
          </div>

          <div className="w-full lg:w-1/5 flex flex-col mb-4 text-white p-4">
            <div className="flex flex-col md:flex-row   mb-2 md:mb-0 md:items-center justify-between">
              <div className="font-bold font-widescreen  w-full ">
                <div className="flex gap-4">
                  <h1 className="text-xl md:text-4xl font-manrope font-bold  tracking-wide w-4/5 ">
                    {lang === "ES"
                      ? project.title_es
                      : project.title_en || project.title_es}
                  </h1>

                  <div className="bg-neutral-800 h-10 flex  overflow-hidden justify-center rounded-md ">
                    <button
                      className={` p-2 bg-neutral-800 w-full  hover:brightness-75 text-sm hover:bg-neutral-900 duration-200 ${
                        lang === "ES" ? "underline" : "brightness-50"
                      }`}
                      onClick={() => setLang("ES")}
                    >
                      ES
                    </button>
                    <button
                      className={`p-2 bg-neutral-800 w-full  hover:brightness-75 text-sm hover:bg-neutral-900 duration-200 ${
                        lang === "EN" ? "underline" : "brightness-50"
                      }`}
                      onClick={() => setLang("EN")}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <h3 className=" my-4 text-sm md:text-lg w-full font-manrope font-light text-neutral-400">
                  <i>
                    {lang === "ES"
                      ? project.subtitle_es
                      : project.subtitle_en || subtitle_es}
                  </i>
                </h3>
                <div className="font-widescreen  h-full w-full ">
                  <span className=" font-bold text-md md:text-md ">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-md leading-relaxed whitespace-pre-line mt-4">
              {lang === "ES"
                ? project.text_es
                : project.text_en || project.text_es}
            </p>
          </div>
        </div>
      </div>
    );
  else return <div>Cargando</div>;
}
