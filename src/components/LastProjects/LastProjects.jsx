import React from 'react'
import { NavLink } from 'react-router-dom'
import LastProjectItem from './LastProjectItem'


const dummy = [{
    title: "K27 HOTEL",
    text: "Ubicado en una ruta estratégica de camino a la sierra de La Libertad, este proyecto nació para ser un referente del contexto que no solo atraiga por su volumetría, sino también por sus espacios acogedores y una atmósfera cálida. Todo esto se consiguió mediante el empleo de materiales de la zona como madera y piedra, colores tierra, acabados de relieve grueso en las superficies y una apertura visual y espacial con los valles circundantes.",
    imageRoute: "/images/k27-hotel-8.jpg"
},{
    title:"INTERIOR JAY LOUNGE",
text:'Este proyecto se desarrolla en un departamento de quinto piso en el Malecón de la Reserva, Miraflores. Su ubicación en uno de los distritos más cosmopolitas de la capital, su relación visual directa con el mar y el estilo de vida de nuestros clientes confluyeron para dar como resultado una propuesta de líneas sencillas y matices cambiantes que van desde los colores claros y fríos como la neblina matutina, materiales cálidos como el sol de la tarde hasta acabados oscuros y elegantes como la noche.Toda la atmósfera conseguida en esta intervención se encuentra contenida en el elemento protagonista de la sala: la butaca Jay Lounge. Creada en 2017 por el diseñador francés Jean-Marie Massaud, esta pieza icónica del diseño contemporáneo es una reinterpretación de los clásicos bergères (poltronas o butacas de brazos acolchados), presentando un volumen ligero, de líneas más libres, orgánicas y estilizadas, pero sin descuidar en ningún momento la comodidad del usuario. Así, la inclusión de este elemento de alto valor artístico y funcional a nuestro diseño no solo aporta a la estética del conjunto, sino también a la calidad de vida de sus ocupantes.'
,imageRoute:"/images/interior-jay-lounge-1.jpg"
},
{
title:"VALLE HOTEL",
text:"El crecimiento de la ciudad de Trujillo no solo se refleja en nuevas zonas urbanas, si no en la nueva oferta de establecimientos comerciales y de hospedaje a disposición del público local y visitante. Nuestro diseño aprovecha su ubicación en un lote con frente a una avenida principal, una calle secundaria y un parque residencial para explotar las visuales panorámicas que rodean el proyecto y se van extendiendo al usuario a medida que sube de nivel. Los materiales se han escogido de una paleta sobria y cálida para exteriorizar la serenidad que se transmite a los huéspedes en los espacios desarrollados en el interior.",
imageRoute:"/images/valle-hotel-3.jpg"
},
{
    title:"CASA DE CAMPO MENOCUCHO",
    text:"El campo siempre nos ofrece vistas impactantes y, en lugares de relieve llano como Menocucho, la posibilidad de contar con amplios terrenos. En este proyecto, pudimos explotar esas dimensiones para plantear una volumetría horizontal limpia y traslúcida, elevada sobre un terraplén para lograr una máxima integración visual entre los ambientes y el exterior.Los materiales empleados tienen la intención de demostrar un sentido de pertenencia gracias a su origen local –como en el caso de la piedra–, su calidez –a través del uso de la madera– y sus texturas perfectamente irregulares –como el concreto desencofrado y el solaqueado en las envolventes blancas–.La casa se planteó hacia un extremo del lote para poder desarrollar un jardín extenso por delante, donde, en un futuro, la vegetación haga las veces de material vivo y cambiante para no sólo complementar el diseño del proyecto arquitectónico, sino también del paisaje circundante.",
    imageRoute:"/images/casa-de-campo-monocucho-1.jpg"
    }
]





export default function LastProjects() {
  
  return (
    <section className='my-32'>
    <div className='container mx-auto '>
        <h2 className='font-bold text-2xl mb-10'>Últimos proyectos</h2>
        <ul className='grid grid-cols-3 mt-4 gap-8' >
        {
            dummy.map((item,index)=>(<LastProjectItem item={item} key={index} />))
        }
           
        
        </ul>
    </div>
</section>
  )
}
