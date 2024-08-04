import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbun from "./DisplayAlbun";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

//Logica de los < > y color de la pagina segun la ruta(albun) que se encuentre
const Display = () => {

  const {albumsData} = useContext(PlayerContext);


  // manipular directamente elementos del DOM seleccionados sin afectar la renderización de todo el componente o la página,
  const displayRef = useRef();
  // útil para operaciones donde necesitas interactuar con el DOM de manera directa y eficiente sin necesidad de volver a renderizar el componente.
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop(): "";
  const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id == albumId)).bgColour : "#121212";

  // Al iniciar el componente o al cambiar la ruta, se ejecuta esta función para cambiar el color de la ruta
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, []);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {
        albumsData.length > 0 ?
        <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/albun/:id" element={<DisplayAlbun album={albumsData.find((x) => (x._id == albumId))}/>}></Route>
      </Routes>: null
      }
     
    </div>
  );
};

export default Display;

