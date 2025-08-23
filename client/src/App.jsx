import { Sidebar } from "lucide-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./components/ChatBox";

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ChatBox />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
