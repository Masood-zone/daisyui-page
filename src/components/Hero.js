import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <main
          className="hero h-96 rounded-lg overflow-hidden md:h-[500px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-5 sm:text-5xl sm:mb-7">
                Welcome to the all new Meta!
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Provident cupiditatevoluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
              <div className="flex items-center justify-center">
                <button className="btn btn-warning sm:btn-wide text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Hero;
