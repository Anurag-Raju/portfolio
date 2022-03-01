import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import Layout from "../components/Layout";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
function Home() {
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-theme ">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center 
            mx-10 bg-theme
          border-4 md:border-0 border-white transform rotate-12 md:rotate-0 "
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hi , I am <b className="text-orange-500">Anurag</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-left">
                Web<b className="text-red-500"> Developer</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="mt-20">
          <h1
            className="text-4xl text-blue-900 font-bold text-center my-8"
            data-aos="slide-up"
          >
            Technologies I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-3">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <FaJava
              size={180}
              color="red"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="yellow"
              className="w-full text-center mt-20"
            />
            <FaBootstrap
              size={180}
              color="purple"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaCss3Alt
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>
        {/* JavaScript */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              Yes You Are Right...I am a JavaScript Buff
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="md:text-xl text-2xl my-5 font-semibold md:px-5 px-14 py-10">
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main use cases: Web Development.
            </p>
          </div>
        </div>
        {/* Dev stack */}
        <div className="my-20">
          <div className="text-center h-52 bg-orange-600">
            <h1 className="text-white font-bold text-4xl py-10">
              My Dev Stack
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-theme hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_dlw10cqe.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 text-center">
              <div>
                <h1 className="text-xl font-bold text-green-400">Front-end</h1>
                <hr />
                <p className="font-semibold mt-5">HTML</p>
                <p className="font-semibold mt-5">CSS</p>
                <p className="font-semibold mt-5">JavaScript</p>
                <p className="font-semibold mt-5">ReactJS</p>
                <p className="font-semibold my-5 mt-5">Redux</p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-400">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-5">Bootstrap</p>
                <p className="font-semibold mt-5">Tailwind CSS</p>
                <p className="font-semibold mt-5">Material UI</p>
                <p className="font-semibold my-5">Bulma</p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-400">Back-end</h1>
                <hr />
                <p className="font-semibold my-5 ">Java</p>
              </div>
            </div>
          </div>
        </div>
        {/* Dev Info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            Who is Anurag
          </h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_dcatp5cr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold ">
                Hi , Hello , Namaste...
                <hr />
                <pre className="text-xl md:text-sm my-5 font-mont font-semibold">
                  {JSON.stringify(
                    {
                      name: "Anurag Raju",
                      age: null,
                      gender: "male",
                      country: "INDIA",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
