import React from "react";
import useSelectedCategory from "@hooks/useSelectedCategory";

export default function ProjectNavItem({ name, onClick }) {
  const category = useSelectedCategory();

  return (
    <li
      onClick={() => onClick()}
      className={`p-2 cursor-pointer relative  text-xs sm:text-sm lg:text-[1rem]  tracking-wider  after:duration-150 after:content-[''] after:w-0  after:h-[1px] after:bg-neutral-950 after:absolute after:-bottom-0 after:left-0  ${
        category.selected === name
          ? "after:!w-full font-bold text-neutral-950"
          : "text-neutral-400"
      }`}
    >
      {name}
    </li>
  );
}
