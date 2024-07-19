import React from "react";
import Sidebar from "../components/Sidebar"; 
import Navbar from "../components/Navbar"; 

function AboutDev() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <section className="mb-8">
            <h1 className="text-3xl font-bold mb-4">About the Developer</h1>
            <p className="text-lg">
              Hello! I'm Aayush kumar Pathak, a passionate Computer Science
              Engineering Student with experience in building web applications.
              I specialize in creating user-friendly interfaces and robust
              backend systems.
            </p>
            <p className="text-lg text-orange-400">
              Pursuing, B.Tech Computer Science Engineering from Lovely
              Professional University, Punjab India.
            </p>
          </section>
          {/* 2nd */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold mb-4">About Project</h1>
            <p className="text-lg">
              Note.me is a full-stack web application developed using the MERN
              stack <b>(MongoDB, Express.js, React, Node.js)</b>. This project
              allows users to create, read, update, and delete notes
              efficiently, providing a seamless note-taking experience. It
              features a secure authentication system where users can sign up
              and log in using their user ID and password, with passwords
              encrypted using bcrypt for enhanced security. Note.me is designed
              with a responsive interface, ensuring accessibility across various
              devices. This project, part of the{" "}
              <span className="text-2xl text-orange-500 font-light">
                Cipher School
              </span>{" "}
              summer training program I completed from June to July 2024,
              provided me with practical experience in building and deploying a
              full-stack web application, honing my skills in both front-end and
              back-end development.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AboutDev;
