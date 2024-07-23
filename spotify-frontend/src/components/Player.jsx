import React, { useContext } from "react";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  // Desestructuración del contexto
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Información del tema actual */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Controles de reproducción */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            alt="Shuffle"
            className="cursor-pointer w-4"
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            alt="Previous"
            className="cursor-pointer w-4"
          />
          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              alt="Pause"
              className="cursor-pointer w-4"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              alt="Play"
              className="cursor-pointer w-4"
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            alt="Next"
            className="cursor-pointer w-4"
          />
          <img
            src={assets.loop_icon}
            alt="Loop"
            className="cursor-pointer w-4"
          />
        </div>

        {/* Barra de progreso */}
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      {/* Controles adicionales (solo en pantallas grandes) */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.play_icon} alt="Play" className="w-4" />
        <img src={assets.mic_icon} alt="Microphone" className="w-4" />
        <img src={assets.queue_icon} alt="Queue" className="w-4" />
        <img src={assets.speaker_icon} alt="Speaker" className="w-4" />
        <img src={assets.volume_icon} alt="Volume" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="Mini Player" className="w-4" />
        <img src={assets.zoom_icon} alt="Zoom" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
