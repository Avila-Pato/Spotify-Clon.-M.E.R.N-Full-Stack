import React, { useContext } from "react";
import NavBar from "./NavBar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { songsData = [], albumsData = [] } = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Álbumes Populares</h1>
        <div className="flex overflow-auto">
          {Array.isArray(albumsData) && albumsData.length > 0 ? (
            albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            ))
          ) : (
            <p>No se encontraron álbumes</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Listas Seleccionadas</h1>
        <div className="flex overflow-auto">
          {Array.isArray(songsData) && songsData.length > 0 ? (
            songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc.slice(0, 15)}
                id={item._id}
                image={item.image}
              />
            ))
          ) : (
            <p>No se encontraron canciones</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
