function Gallery() {
  return (
    <div className="gallery py-24 bg-brownLight/20 relative" id="gallery">
      <div className="container mx-auto">
        <div className="title text-center">
          <h2 className="font-ubuntu font-bold md:text-4xl text-2xl mb-6 w-3/4 text-center mx-auto capitalize">
            What kind of Coffee we serve for you
          </h2>
          <p className="font-ubuntu">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="imgs pt-20">
          <div className="img-box grid grid-cols-1 md:grid md:grid-cols-3  ">
            <div className="box  grid-cols-1 p-2 relative">
              <img
                src="../src/assets/img/gallery-2.jpg"
                className="p-2 transform rotate-4"
                alt="img"
              />
              <img
                src="../src/assets/img/gallery-5.jpg"
                className="p-2"
                alt="img"
              />
            </div>

            <div className="upper-img grid md:grid p-2 md:col-span-2 md:gap-4">
              <img
                src="../src/assets/img/header-2.jpg"
                className="md:col-span-2 p-2 flex mx-auto"
                alt="img"
              />
              <img
                src="../src/assets/img/gallery-3.png"
                className="p-2"
                alt="img"
              />
              <img
                src="../src/assets/img/gallery-4.png"
                className="p-2"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="btn py-14 space-x-5 text-center md:text-right ">
          <a
            className="px-14 py-4 text-white bg-brownLight font-bold rounded-full capitalize hover:text-white hover:bg-mainBrown  "
            href="#"
          >
            find us
          </a>
        </div>
      </div>

      <div className="cookie absolute bottom-0 flex justify-between w-full opacity-80 px-5 pb-5">
        <img
          src="../src/assets/img/cookie-svgrepo-com.svg"
          alt="cookies"
          className="w-12 md:w-24"
        />
        <img
          src="../src/assets/img/cookie-svgrepo-com.svg"
          alt="cookies"
          className="w-12 md:w-24"
        />
        <img
          src="../src/assets/img/cookie-svgrepo-com.svg"
          alt="cookies"
          className="w-12 md:w-24"
        />
        <img
          src="../src/assets/img/cookie-svgrepo-com.svg"
          alt="cookies"
          className="w-12 md:w-24"
        />
        <img
          src="../src/assets/img/cookie-svgrepo-com.svg"
          alt="cookies"
          className="w-12 md:w-24"
        />
      </div>
    </div>
  );
}

export default Gallery;