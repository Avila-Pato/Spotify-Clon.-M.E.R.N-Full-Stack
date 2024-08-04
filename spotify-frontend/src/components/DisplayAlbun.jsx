import React, { useContext, useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbun = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    const foundAlbum = albumsData.find((item) => item._id === id);
    if (foundAlbum) {
      setAlbumData(foundAlbum);
    }
  }, [id, albumsData]);

  if (!albumData) return null;

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              alt=""
              className="inline-block w-5"
            />
            <b> Spotify</b> 1.323.232 • Me Gusta
            <b> • 50 canciones </b> • 2 horas 30 minutos
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Titulo
        </p>
        <p>Álbum</p>
        <p className="hidden sm:block">Reproducido</p>
        <img className="m-auto w-4 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.filter((item) => item.album === albumData.name).map((item, index) => (
        <div
          onClick={() => playWithId(item._id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer "
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="" className="inline w-10 mr-5 " />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">Hace 5 Dias</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbun;
