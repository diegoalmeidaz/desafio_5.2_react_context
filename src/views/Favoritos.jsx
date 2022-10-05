import Context from "../context/Context";
import { useContext } from "react";

const Favoritos = () => {
  const { pictures, setPictures } = useContext(Context);

  const borrarFavorito = (id) => {
    const fotoIndex = pictures.findIndex((f) => f.id === id);
    pictures[fotoIndex].liked = !pictures[fotoIndex].liked;
    setPictures([...pictures]);
  };

  return (
    <>
      <h2>FOTOS FAVORITAS</h2>
      <div className="p-3 galeria grid-columns-4">
        {pictures
          .filter((picture) => picture.liked === true)
          .map((item) => (
            <div
              key={item.id}
              className="foto"
              style={{ backgroundImage: `url(${item.src.tiny})` }}
              onClick={() => borrarFavorito(item.id)}
            >
              <p className="descripcion">{item.alt}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Favoritos;
