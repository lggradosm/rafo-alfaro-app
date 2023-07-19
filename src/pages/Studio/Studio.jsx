import React from "react";
import image from "/images/home-nosotros.jpg";
import equipoDummy from "../../util/equipoDummy";
import infraestructuraDummy from "../../util/infraestructuraDummy";
import CollageImage from "../../components/Studio/CollageImage";
import rafo_image from "/images/rafo-alfaro.jpg"
import reel1 from "/videos/reel1.mp4"
import reel2 from "/videos/reel2.mp4"
import reel3 from "/videos/reel3.mp4"

export default function Studio() {
  return (
    <div className="relative loaded-page__animation">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" w-full bg-no-repeat bg-cover bg-center h-[50vh]" 
      ></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-1 p-1">
      <CollageImage cols={2} rows={2} image={rafo_image}/>
      <CollageImage rows={2}  type="text" text={`Somos Rafo Alfaro, Estudio Creativo de arquitectura & diseño de interiores.

Como estudio, el objetivo es mejorar la calidad de vida de nuestros clientes y usuarios a través de nuestros conceptos, como proyectos y edificaciones.

Creemos en la búsqueda de la perfección y la simplicidad.`}/>
      <CollageImage image={equipoDummy[3].image} type="team" name={equipoDummy[3].name} position={equipoDummy[3].position}/>
      <CollageImage image={equipoDummy[5].image} type="team" name={equipoDummy[5].name} position={equipoDummy[5].position}/>
      <CollageImage image={equipoDummy[4].image} type="team" name={equipoDummy[4].name} position={equipoDummy[4].position}/>
      <CollageImage image={equipoDummy[7].image} type="team" name={equipoDummy[7].name} position={equipoDummy[7].position}/>
      
      <CollageImage cols={2} image={infraestructuraDummy[5]} />
      <CollageImage image={infraestructuraDummy[1]} center={true}/>
      <CollageImage image={equipoDummy[0].image} type="team" name={equipoDummy[0].name} position={equipoDummy[0].position}/>
      <CollageImage image={reel2} type="video" />

      <CollageImage image={infraestructuraDummy[4]} center={true}/>
      <CollageImage image={equipoDummy[13].image} type="team" name={equipoDummy[13].name} position={equipoDummy[13].position}/>
      <CollageImage   type="text" text={`Sabemos que un estudio de diseño que explota su lado creativo comprende mucho más que las capacidades intelectuales de sus integrantes. Es por eso que aquí todos y cada uno de los profesionales de este equipo, dejamos –en constante coautoría– una cuota de emoción y de pertenencia en cada nuevo reto que emprendemos. `}/>
      <CollageImage image={equipoDummy[2].image} type="team" name={equipoDummy[2].name} position={equipoDummy[2].position}/>
      <CollageImage image={infraestructuraDummy[9]} center={true}/>
      <CollageImage image={equipoDummy[11].image} type="team" name={equipoDummy[11].name} position={equipoDummy[11].position}/>
      <CollageImage image={reel3} type="video" />

      <CollageImage cols={2} image={infraestructuraDummy[7]} center={true}/>
      <CollageImage image={equipoDummy[9].image} type="team" name={equipoDummy[9].name} position={equipoDummy[9].position}/>

      <CollageImage  image={infraestructuraDummy[8]} center={true}/>

      <CollageImage image={equipoDummy[8].image} type="team" name={equipoDummy[8].name} position={equipoDummy[8].position}/>
      <CollageImage image={reel1} type="video" />



    </div>
    </div>
  );
}
