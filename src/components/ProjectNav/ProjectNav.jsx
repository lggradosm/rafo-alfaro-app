import React, { useState } from "react";
import ProjectNavItem from "./ProjectNavItem";

export default function ProjectNav({onclick,selected}) {
  return (
    <ul className="flex__between  h-full font-manrope gap-4  z-20 w-2/5 ">
      <ProjectNavItem
        name={"Todo"}
        onClick={()=>onclick("Todo")}
        selected={selected}
      />
      <ProjectNavItem
        name={"Arquitectura"}
        onClick={()=>onclick("Arquitectura")}
        selected={selected}

      />
      <ProjectNavItem
        name={"Interiorismo"}
        onClick={()=>onclick("Interiorismo")}
        selected={selected}

      />
      <ProjectNavItem
        name={"Construcción"}
        onClick={()=>onclick("Construcción")}
        selected={selected}

      />
    </ul>
  );
}
