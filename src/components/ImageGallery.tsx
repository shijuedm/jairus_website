
import { useState } from 'react';

const images = [
  {
    id: 1,
    src: "images/20250226_154627.jpg",
    alt: "Colorful fruits on wooden plate",
    title: "Pamba River"
  },
  {
    id: 2,
       src: "images/20250228_173657.jpg",
    alt: "Cute grey tabby kitten",
    title: "Paddy Field at Kerala"
  },
  {
    id: 3,
     src: "images/20250319_154248.jpg",
    alt: "Brown deer in nature",
    title: "Beach at Kerala"
  },
  {
    id: 4,
      src: "images/20250608_131050.jpg",
    alt: "Monkey with banana",
    title: "Fort Edmonton Park"
  },
  {
    id: 5,
      src: "images/20250226_154627.jpg",
    alt: "Two penguins on rock",
    title: "Penguin Pals 🐧"
  },
  {
    id: 6,
    src: "images/20250615_124747.jpg",
    alt: "More colorful fruits",
    title: "Rainbow Treats 🌈"
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kid-blue via-kid-purple to-kid-pink bg-clip-text text-transparent mb-4">
          My Photo Gallery 📸
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Click on any photo to see it bigger!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm">👆</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white font-bold text-xl bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                {images[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
