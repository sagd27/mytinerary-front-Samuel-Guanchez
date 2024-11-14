import { useEffect, useState } from "react";

const cities = [
  { name: "New York", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg" },
  { name: "Paris", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" },
  { name: "Tokyo", img: "https://a.storyblok.com/f/239725/1440x832/c8045fb88b/01_jp_tokyo_hero.png/m/3840x2219" },
  { name: "Sydney", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEJDADOCBmZjLuO6WmN3uVAIYhgxgl3tjvw&s" },
  { name: "London", img: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg" },
  { name: "Dubai", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygH8i-Id7sZ3EXPtyNEnZhiMkZa5tjIVKQA&s" },
  { name: "Rome", img: "https://img.static-kl.com/images/media/5A8A006F-0618-4245-BBC88553D651B6E2" },
  { name: "Istanbul", img: "https://cdn.britannica.com/58/93158-050-7719EB2B/view-Blue-Mosque-Istanbul-Hagia-Sophia.jpg" },
  { name: "Moscow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHPKakQFR4D61WlDbclfdiW3uw7zH0_-tmA&s" },
  { name: "Berlin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BwCl1hbHtf1yr0kYZyabV25nI19EJRDVMg&s" },
  { name: "Toronto", img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/517000/517220-canada.jpg" },
  { name: "Amsterdam", img: "https://www.eurail.com/es/plan-your-trip/trip-ideas/city-guides/amsterdam/_jcr_content/root/responsivegrid/masthead-image.coreimg.jpeg/1699351713352/amsterdam-masthead.jpeg" },
];

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(cities.length / (window.innerWidth < 640 ? 1 : 4));

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const slides = [];
  const imagesPerSlide = window.innerWidth < 820 ? 1 : 4; // Muestra 1 imagen en pantallas pequeñas, 4 en pantallas grandes

  for (let i = 0; i < cities.length; i += imagesPerSlide) {
    slides.push(cities.slice(i, i + imagesPerSlide));
  }

  return (
    <>
      <div className="w-full sm:w-[60%] h-auto  m-5">
        <h2 className="md:text-3xl text-center font-bold">Popular Mytineraries</h2>
       <div className="relative"> 
         
       <button onClick={goToPreviousSlide} className="absolute  left-2 md:-left-6 top-[40%] transform -translate-y-1/2 bg-gray-800 text-white  h-7 w-7 rounded-full ">
            &#10094;
          </button>
          <button onClick={goToNextSlide} className="absolute z-10 right-2 md:-right-6 top-[40%] transform -translate-y-1/2 bg-gray-800 text-white rounded-full  h-7 w-7">
            &#10095;
          </button>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-around">
                {slide.map((city, idx) => (
                  <div key={idx} className="flex flex-col lg:w-1/4 w-[80%] h-[40vh] p-2 m-1 items-center ">
                    <img src={city.img} alt={city.name} className="rounded-lg object-cover w-full h-[80%] " />
                    <p className=" text-center m-2 p-1/2 w-[30%] rounded-xl font-semibold text-white bg-navbarfooter">{city.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div >
         
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
       </div>
      </div>
    </>
  );
}

export default Carrusel;        