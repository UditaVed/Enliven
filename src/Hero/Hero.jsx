import React from "react";

const Hero = () => {
  return (
    <>
  {/*For md resolution8*/}
      <div className="md:block lg:hidden hidden">
        <div className="hero min-h-screen text-white">
          <div className="hero-content md:pr-0  gap-4 flex-row-reverse">
            <img
              src="hero/Pic.png"
              className="md:w-[40vw] md:h-[60vw] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold md:w-[17ch]">
                Domestic Worker's Life{" "}
                <span className="text-[#FFF7B2]">Matter</span>
              </h1>
              <p className="py-6 md:w-[50ch]">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-yellow-100 text-black  hover:text-white">
                Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*for mobile and large resolution*/}
      <div div className="md:hidden lg:block  ">
        <div className="hero place-items-end justify-center min-h-screen bg-black text-white items-center lg:items-end">
          <div className="hero-content text-center flex flex-col">
            <div className="max-w-md">
              <h6 className="text-md italic pb-20">
                We Help <span className="text-[#FFF7B2]">People</span> to get
                what they <span className="text-[#FFF7B2]">Deserve</span>
              </h6>
              <h1 className="text-5xl font-bold">
                Domestic Worker's Life{" "}
                <span className="text-[#FFF7B2]">Matter</span>
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-yellow-100 text-black  hover:text-white ">
                Tutorial
              </button>
            </div>
            <div>
            <img src="hero/People.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
