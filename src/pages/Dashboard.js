import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
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

        <MainContent showAddNote={showAddNote} />
      </section>
    </>
  );
}

export default Dashboard;
