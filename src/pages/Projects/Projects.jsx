import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectNav from "@components/ProjectNav/ProjectNav";
import ProjectCover from "../../components/ProjectNav/ProjectCover";
import ProjectsGrid from "../../components/ProjectNav/ProjectsGrid";
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const changeSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-w-[200px] min-h-screen animate-loadOpacity">
      <div className="h-full ">
        <div className="h-[50vh]">
          <ProjectCover />
        </div>

        <ProjectNav
          selected={selectedCategory}
          onclick={changeSelectedCategory}
        />
        <ProjectsGrid selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
