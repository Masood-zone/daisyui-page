import React from "react";

function Newsletter() {
  return (
    <div className="py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
          <span className="flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary">
            Let's build something <br className="hidden sm:inline" /> awesome
            together!
          </span>
          <button className="btn btn-secondary rounded-full sm:btn-lg">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
