import React from "react";
import { NavLink } from "react-router-dom";
import LastProjectItem from "./LastProjectItem";
import projectService from "@services/projectService";
import useLastProjects from "../../hooks/useLastProjects";
const data = projectService().slice(Math.max(projectService().length - 6));
export default function LastProjects() {
  const { projects } = useLastProjects();

  return (
    <section className="my-20 w-full  text-white ">
      <div className="lg:container mx-auto w-full p-1 lg:p-0 ">
        <h2 className="font-bold text-2xl mb-10">Últimos proyectos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 mt-4 gap-1">
          {projects?.map((item, index) => (
            <LastProjectItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
