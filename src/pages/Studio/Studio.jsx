import React from "react";
import image from "/images/home-nosotros.jpg";
import signature from "/images/firma.png";
import rafoAlfarPhoto from "/images/rafo-alfaro.jpg";
import CategoriesSectionItem from "../../components/CategoriesSection/CategoriesSectionItem";
import logo from "/images/logo-white_retina.png";
import team from "/images/nosotros_equipo.jpg";
import us from "/images/nosotros_estudio.jpg";

export default function Studio() {
  return (
    <div className="relative loaded-page__animation">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" w-screen h-screen bg-no-repeat bg-cover bg-center"
      ></div>
      <div className=" page container flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="flex flex-col gap-10 w-full items-center md:items-start md:w-1/2">
          <h3 className="text-4xl font-bold">¡BIENVENIDOS!</h3>
          <p>
            Somos Rafo Alfaro, Estudio Creativo de arquitectura & diseño de
            interiores. Como estudio el objetivo es mejorar la calidad de vida
            de nuestros clientes y usuarios a través de nuestros conceptos, como
            proyectos y edificaciones. Creemos en la búsqueda de la perfección y
            la simplicidad.
          </p>
          <div className="w-full flex justify-end">
            <img src={signature} className="w-48" alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={rafoAlfarPhoto} alt="" className="" />
        </div>
      </div>
      <div className=" bg-neutral-950  flex__center lg:py-48 mt-24  ">
        <div className="relative w-[70%]  flex items-start  flex-col overflow-hidden gap-10 lg:gap-20 ">
          <div className="absolute w-full h-full  left-0 top-  flex justify-center">
            <img
              src={logo}
              alt=""
              className="w-3/5 h-full object-contain  opacity-[.05]"
            />
          </div>
          <CategoriesSectionItem
            image={team}
            direction={"left"}
            category={"Equipo"}
            redirect={"/estudio/equipo"}
          />
          <CategoriesSectionItem
            image={us}
            direction={"right"}
            category={"Estudio"}
            redirect={"/estudio/instalaciones"}
          />
        </div>
      </div>
    </div>
  );
}
