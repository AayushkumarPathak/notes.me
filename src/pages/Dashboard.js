import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Login from "../pages/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Dashboard() {
  const [showAddNote, setShowAddNote] = useState(false);
  return (
    <>
    
    <section className="flex flex-row h-screen">
      <div className="">
        <Sidebar setShowAddNote={setShowAddNote} />
      </div>
      {/* setShowAddNote={setShowAddNote},, showAddNote={showAddNote} */}

      <MainContent showAddNote={showAddNote} />
    </section>
    
    </>
  );
}

export default Dashboard;
