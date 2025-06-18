
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "Welcome to My Awesome Website! 🌟",
    description: "Let's explore amazing things together!",
    bgGradient: "from-kid-blue via-kid-purple to-kid-pink",
    emoji: "🚀"
  },
  {
    id: 2,
    title: "Fun Adventures Await! 🎈",
    description: "Discover cool animals, games, and stories!",
    bgGradient: "from-kid-green via-kid-yellow to-kid-orange",
    emoji: "🎮"
  },
  {
    id: 3,
    title: "Learn and Play! 📚",
    description: "Education is fun when you're having a great time!",
    bgGradient: "from-kid-pink via-kid-purple to-kid-blue",
    emoji: "🎨"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} flex items-center justify-center transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="text-center text-white px-6">
            <div className="text-8xl md:text-9xl mb-4 animate-bounce-gentle">
              {slide.emoji}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl animate-fade-in animation-delay-200">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white rounded-full w-12 h-12 p-0"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white rounded-full w-12 h-12 p-0"
        size="icon"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
