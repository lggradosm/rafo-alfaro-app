import React from "react";
import logo from "/images/logo-white_retina.png";
import SocialButtons from "./SocialButtons";
import facebook from "/icons/facebook.svg";
import instagram from "/icons/instagram.svg";
import whatsapp from "/icons/whatsapp.svg";
import linkedin from "/icons/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full p-6  mt-36 bg-neutral-950">
      <div className="w-full  flex flex-col md:flex-row justify-between my-4 md:my-10 md:items-center">
        <div className=" flex flex-col justify-center  gap-4  md:py-4  text-white">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="" className="w-6 h-6 md:w-10 md:h-10" />
            <h4 className="text-lg md:text-2xl">
              Rafo Alfaro Estudio Creativo
            </h4>
          </div>
          <div className="text-sm md:text-md md:flex md:flex-col md:gap-1">
            <h3 className="font-bold text-lg tracking-wider">
              Horario de atención
            </h3>
            <p>Lunes a Viernes </p>
            <p>8:00 a.m. a 1:00 p.m. - 2:00 p.m a 6:00 p.m.</p>
          </div>
        </div>
        <div className="w-full block md:hidden h-[1px] bg-neutral-600 my-4 mt-10" />
        <div className="my-4">
          <ul className="flex justify-center md:justify-start gap-4 mb-4">
            <SocialButtons
              icon={facebook}
              url={"https://www.facebook.com/rafoalfaro.pe"}
            />
            <SocialButtons
              icon={instagram}
              url={"https://www.instagram.com/rafoalfaro.pe/"}
            />
            <SocialButtons
              icon={whatsapp}
              url={"https://api.whatsapp.com/send?phone=51949222588"}
            />
            <SocialButtons
              icon={linkedin}
              url={
                "https://www.linkedin.com/company/rafo-alfaro-estudio-creativo/"
              }
            />
          </ul>
          <ul className="text-xs flex flex-col gap-2 tracking-widest text-white">
            <li>
              <NavLink
                to={
                  "https://www.google.com/maps/dir/''/RAFO+ALFARO+%7C+Estudio+Creativo,+Avenida+Metropolitana+II,+Trujillo/@-8.1219289,-79.0410366,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x91ad3dc7290a7e81:0xf85b63b6ccff7344!3e0"
                }
                target="_blank"
                className={"uppercase"}
              >
                Av. Metropolitana 2 Mz. S1 Lote 9, Urb. San Isidro Etapa II -
                Trujillo
              </NavLink>
            </li>
            <li>
              <NavLink to={"tel:+51949222588"}>
                TELEFONO: +51 949 222 588
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-neutral-600 my-4" />

      <div className=" w-full flex  flex-col  justify-center items-center gap-1 text-white">
        <ul className="w-full text-xs  tracking-widest  flex  justify-center items-center gap-4 md:gap-10">
          <li>
            <NavLink to={"/politica-de-privacidad"}>
              POLITICA DE PRIVACIDAD
            </NavLink>
          </li>
          <li>
            <NavLink to={"/politica-de-cookies"}>POLITICA DE COOKIES</NavLink>
          </li>
        </ul>
        <p className=" text-xs">&copy; 2023 Rafo Alfaro Estudio Creativo.</p>
      </div>
    </footer>
  );
}
