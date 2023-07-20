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
    <footer className="w-full p-4   flex__center  ">
      <div className="w-full  flex flex-col md:flex-row justify-between ">
      <div className=" flex  flex-col  justify-center  gap-1 text-white">
        
        <p className=" text-xs ">&copy; 2023 Rafo Alfaro Estudio Creativo.</p>
      </div>
        <div className="w-full block md:hidden h-[1px] bg-neutral-600" />
        <div className="">
          <ul className="flex justify-center md:justify-start gap-2 ">
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
       
        </div>
      
      </div>



     
    </footer>
  );
}
