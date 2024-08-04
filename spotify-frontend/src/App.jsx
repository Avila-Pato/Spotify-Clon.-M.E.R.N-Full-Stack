import React, { useContext } from "react";
import Player from "./components/Player.jsx";
import SideBar from "./components/sideBar.jsx";
import Display from "./components/Display.jsx";
import { PlayerContext } from "./context/PlayerContext.jsx";

const App = () => {
  const { audioRef, track, songsData  } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {/* // creando operador ternarioo para que si no hay canciones no se muestre el reproductor */}
  {
    songsData.length  !==0 
     ? <>
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      </>
     : null
  }
  <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
  </div>
 )
}
  
     

export default App;
