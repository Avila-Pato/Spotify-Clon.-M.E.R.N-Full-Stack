// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/addSong";
import AddAlbum from "./pages/addAlbum";
import ListSong from "./pages/listSong";
import ListAlbum from "./pages/listAlbum";
import SideBar from "./components/sidebar";
import NavBar from "./components/navbar";

export const url = "http://localhost:4000";

const App = () => {
  return (
    <div className=" flex items-start min-h-screen">
      <ToastContainer />
      <SideBar />
      <div className="flex-1 h-screen overflow-scroll bg-[#f3fff7]">
        <NavBar />
        <div className="pt-8 pl-5 sm:12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
