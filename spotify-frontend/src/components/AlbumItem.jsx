import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  //   Navigate es un hook para navegar hacia los detalles del albun dal darle click al albun esta direccionara hacia esa pagina.
  const navigate = useNavigate();

  return (
    //

    <div
      onClick={() => navigate(`/albun/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm ">{desc}</p>
    </div>
  );
};

export default AlbumItem;
