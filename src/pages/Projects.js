import React from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
function Projects() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl font-semibold text-center">
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience
          </p>
          <h1
            className="text-4xl text-center font-bold mt-5"
            data-aos="slide up"
          >
            Because
          </h1>
        </div>
        <div className="bg-orange-600 font-bold text-center text-white p-20 mx-20 md:mx-5 rounded-tl-full rounded-br-full ">
          <h1 className="md:text-4xl text-6xl" data-aos="slide left">
            THE GAME IS...
          </h1>
          <h1 className="md:text-4xl text-6xl" data-aos="slide right">
            CONSISTENCY
          </h1>
        </div>
        <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
          {projectsData.map((item) => {
            return (
              <div>
                <div className="relative p-10 border-2 rounded-bl-3xl rounded-tr-3xl border-gray-400">
                  <img src={item.image} className="w-full h-52 text-center" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-bl-3xl rounded-tr-3xl">
                    <h1 className="text-4xl font-semibold text-white">
                      {item.title}
                    </h1>
                    <button className="border-2 rounded text-white border-white py-2 px-5 hover:bg-blue-500 mt-5">
                      DEMO
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
