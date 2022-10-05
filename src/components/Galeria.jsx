import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../context/Context";
import { useContext } from "react";

export default function Galeria() {
  // Seccion de carga de data desde el json

  const { pictures, setPictures } = useContext(Context);

  // seccion filtrado: utilizar la variable like, para poder hacer el filtro en favoritos con el cambio en la variable

  const newFavorites = (index) => {
    setPictures((current) =>
      current.map((pictures) => {
        if (pictures.id === index && pictures.liked === true) {
          return { ...pictures, liked: false };
        }
        if (pictures.id === index && pictures.liked === false) {
          return { ...pictures, liked: true };
        }

        return pictures;
      })
    );
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {pictures.map((pictures) => (
        <div
          key={pictures.id}
          className="foto"
          style={{ backgroundImage: `url(${pictures.src.tiny})` }}
          onClick={() => newFavorites(pictures.id)}
        >
          <Heart filled={pictures.liked} />
          <p className="descripcion">{pictures.alt}</p>
        </div>
      ))}
    </div>
  );
}
