

const CardProject = ({title, image, icons}) => {
  return (
    <div className="bg-blue-900 p-4 rounded-lg text-white flex flex-col justify-between shadow-2xl transition-all delay-100 ease-in hover:scale-105">
      <div>
        <img src={image} alt="icon" className="h-[160px] object-cover" />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Visitar Sitio</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {icons.map((IconComponent, index) => (
            <IconComponent key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProject