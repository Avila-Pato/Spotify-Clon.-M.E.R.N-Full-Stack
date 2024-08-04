import { createContext, useEffect, useRef, useState } from "react";
import React from "react";

import axios from "axios";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();
  
  //se creara una url para guardar el backend url
  const url = "http://localhost:4000";
  //se crean 2 variables para las canciones y albunes
  const [songsData, setSongsData] = useState([]);
  const  [albumsData, setAlbumData] = useState([]);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Ecoger musica del menu segun cual queramos
  const playWithId = async (id) => {
    await songsData.map((item)=>{
      if(id === item._id ){
        setTrack(item)
      }
    })
    await audioRef.current.play();
    setPlayStatus(true);
  };

  // escoger musica anterior

  const previous = async () => {

    songsData.map(async (item, index) => {
    
      if (track._id === item._id && index > 0) {
    
    
        await setTrack(songsData[index - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  const next = async () => {
    songsData.map(async (item, index) => {
    
      if (track._id === item._id && index < songsData.length ) {
    
    
        await setTrack(songsData[index + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  //Constante para adelantar y retrodecer musica segun quiera el usuario

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  // Obtener datos de las canciones
  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      setTrack(response.data.songs[0]);
    } catch (error) {
      console.log(error);
      
    }
  };
// Obtener datos de los albunes
  const getAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumData(response.data.albums);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        // Lamada de la barra del reprodicotr de musica para que sea renderise
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        // renderizacion de minutos y segundos en el reproductor
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  // creamos otro useEffect para que se ejecute cuando se renderice el componente
  useEffect(() => {
    getSongsData();
    getAlbumData();
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

// El código define un contexto (PlayerContext) y un proveedor de contexto (PlayerContextProvider). Los componentes envueltos en PlayerContextProvider pueden acceder al contextValue proporcionado por el contexto. Esto es útil para gestionar estados globales o compartir datos entre componentes que no están directamente relacionados.

//  useRef se utiliza para crear una referencia a un elemento de audio, permitiendo que los componentes hijos controlen la reproducción del audio a través del contexto.
