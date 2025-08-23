import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { chats, setSelectedChat, theme, setTheme, user } = useAppContext();
  const [search, setSearch] = useState("");
  return <div>Sidebar</div>;
};

export default Sidebar;
