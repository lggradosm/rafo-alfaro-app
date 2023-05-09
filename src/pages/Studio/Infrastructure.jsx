import React from "react";
import infraestructureImages from "@util/infraestructuraDummy";
import GalleryThumbnail from "@components/GalleryThumbnail";
export default function Infrastructure() {
  console.log(infraestructureImages);
  return (
    <div className="page container loaded-page__animation ">
      <h3 className="font-bold text-neutral-900  text-4xl mb-8">
        INSTALACIONES
      </h3>
      <GalleryThumbnail images={infraestructureImages} />
    </div>
  );
}
