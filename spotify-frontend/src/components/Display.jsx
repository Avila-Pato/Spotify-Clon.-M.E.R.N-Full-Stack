import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbun from "./DisplayAlbun";
import { albumsData } from "../assets/frontend-assets/assets";

//Logica de los < > y color de la pagina segun la ruta(albun) que se encuentre
const Display = () => {
  // manipular directamente elementos del DOM seleccionados sin afectar la renderización de todo el componente o la página,
  const displayRef = useRef();
  // útil para operaciones donde necesitas interactuar con el DOM de manera directa y eficiente sin necesidad de volver a renderizar el componente.
  const location = useLocation();
  const isAlbum = location.pathname.includes("albun");
  const albunId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albunId)].bgColor;

  // Al iniciar el componente o al cambiar la ruta, se ejecuta esta función para cambiar el color de la ruta
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/albun/:id" element={<DisplayAlbun />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
