import React, { useState } from "react";
import ProjectNavItem from "./ProjectNavItem";
import useSelectedCategory from "@hooks/useSelectedCategory";

export default function ProjectNav() {
  const selected = useSelectedCategory();
  return (
    <ul className="flex__between  w-full ">
      <ProjectNavItem
        name={"Todo"}
        onClick={() => selected.selectCategory("Todo")}
      />
      <ProjectNavItem
        name={"Arquitectura"}
        onClick={() => selected.selectCategory("Arquitectura")}
      />
      <ProjectNavItem
        name={"Interiorismo"}
        onClick={() => selected.selectCategory("Interiorismo")}
      />
      <ProjectNavItem
        name={"Construcción"}
        onClick={() => selected.selectCategory("Construcción")}
      />
    </ul>
  );
}
