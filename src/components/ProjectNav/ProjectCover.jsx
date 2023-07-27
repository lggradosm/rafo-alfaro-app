import React, { useEffect, useState } from "react";
import image from "/images/home-nosotros.jpg";

export default function ProjectCover() {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className=" w-full bg-no-repeat bg-cover bg-center h-full animate-loadOpacity"
    ></div>
  );
}
