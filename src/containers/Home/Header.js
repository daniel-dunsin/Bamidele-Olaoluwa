import React, { useEffect, useState } from "react";
import hero from "../../assets/images/olaolu2.jpg";

const text = ["Bamidele Olaoluwa", "I'm a 3D artist"];

const Header = () => {
  const [count, setCount] = useState(0);

  const changeText = () => {
    if (count === 1) {
      setCount(0);
    } else if (count === 0) {
      setCount(1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeText();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <header className="mt-16 flex md:flex-row flex-col gap-8" id="home">
      <div className="flex-1 w-full flex items-center justify-center">
        <img src={hero} alt="" className="w-full max-w-[402px] max-h-[620px]" />
      </div>
      <div className="flex-1 w-full flex flex-col gap-y-5 lg:gap-y-12 md:gap-y-8 items-start">
        {count === 0 ? (
          <h1 className="font-playfair header-text lg:text-[45px] md:text-[30px] text-[24px]">
            {text[count]}
          </h1>
        ) : (
          <h2 className="font-playfair header-text lg:text-[45px] md:text-[30px] text-[24px]">
            {text[count]}
          </h2>
        )}
        <p>
          I am an enthusiatic and passion-driven 3D artist with knowledge in a
          vast number of motion graphics skills ranging from development to
          production.
        </p>
        <a href="mailto:bamideleolaoluwa503@gmail.com">
          <button className="text-black hover:bg-lightPurple hover:text-white border border-1 border-black hover:border-lightPurple py-2 px-4 transition">
            CONTACT ME
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
