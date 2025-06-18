
import HeroSlider from '@/components/HeroSlider';
import ImageGallery from '@/components/ImageGallery';
import VideoGallery from '@/components/VideoGallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="py-6 px-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl animate-wiggle">🌟</span>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-kid-blue to-kid-purple bg-clip-text text-transparent">
              JAIRUS SAM ABRAHAM
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-kid-purple transition-colors font-medium">
              Home 🏠
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-kid-purple transition-colors font-medium">
              Gallery 📷
            </a>
            <a href="#videos" className="text-gray-700 hover:text-kid-purple transition-colors font-medium">
              Videos 🎬
            </a>
            <a href="#about" className="text-gray-700 hover:text-kid-purple transition-colors font-medium">
              About Me 😊
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <HeroSlider />
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 animate-bounce-gentle">🎮</div>
              <h3 className="text-2xl font-bold text-kid-blue mb-2">50+</h3>
              <p className="text-gray-600">Games Played</p>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 animate-bounce-gentle animation-delay-200">📚</div>
              <h3 className="text-2xl font-bold text-kid-purple mb-2">25+</h3>
              <p className="text-gray-600">Books Read</p>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 animate-bounce-gentle animation-delay-400">🎨</div>
              <h3 className="text-2xl font-bold text-kid-pink mb-2">100+</h3>
              <p className="text-gray-600">Drawings Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-4">
        <div className="max-w-6xl mx-auto">
          <ImageGallery />
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <VideoGallery />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kid-green via-kid-yellow to-kid-orange bg-clip-text text-transparent mb-8">
            About Me! 🌈
          </h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-6xl mb-6 animate-wiggle">👋</div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Hi there! I am Jairus Sam Abraham and I'm a 10-year-old who loves to explore, learn new things, and have fun! 
              I enjoy playing games, reading books, drawing pictures, and spending time with my friends and family.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This website is my special place where I can share all the cool things I discover and create. 
              Thanks for visiting! 🎉
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <span className="text-3xl animate-bounce-gentle">🌟</span>
            <span className="text-3xl animate-bounce-gentle animation-delay-200">🎈</span>
            <span className="text-3xl animate-bounce-gentle animation-delay-400">🎉</span>
            <span className="text-3xl animate-bounce-gentle animation-delay-600">✨</span>
          </div>
          <p className="text-gray-600 font-medium">
            Made with lots of fun and creativity! 💫
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 Jairus Sam Abraham
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
