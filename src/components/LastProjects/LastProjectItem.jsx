import React from "react";
import { NavLink } from "react-router-dom";

export default function LastProjectItem({ item }) {
  console.log(item.images);
  return (
    <li className="w-full overflow-hidden   group cursor-pointer">
      <NavLink to={item.url}>
        <div
          style={{ backgroundImage: `url(${item.featuredImage})` }}
          className={`relative w-full h-[300px] bg-no-repeat bg-cover bg-center rounded-sm`}
        >
          <span className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-[.65] duration-[800ms]"></span>
        </div>
        <div className="flex flex-col overflow-hidden gap-2 my-4 ">
          <h3 className="font-bold text-lg whitespace-nowrap">{item.title}</h3>
          <p className="line-clamp-4  text-sm">{item.text}</p>
          <div className="text-center">
            <span className={"text-center font-medium group-hover:underline"}>
              Leer más
            </span>
          </div>
        </div>
      </NavLink>
    </li>
  );
}
