import React from "react";
import { NavLink } from "react-router-dom";
import LastProjectItem from "./LastProjectItem";
import projectService from "@services/projectService";

const data = projectService().slice(Math.max(projectService().length - 6));

export default function LastProjects() {
  return (
    <section className="my-32 ">
      <div className="container">
        <h2 className="font-bold text-2xl mb-10">Últimos proyectos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-4 gap-8">
          {data.map((item, index) => (
            <LastProjectItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
