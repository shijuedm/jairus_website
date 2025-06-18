
import { useState } from 'react';
import { Youtube } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Edmonton Vally Zoo 🧪",
    youtubeId: "KoUBsTWfpjM", // Example YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1525152334085-d5f17f22d5c8?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cool experiments you can try at home!"
  },
  {
    id: 2,
    title: "Wall climbing",
    youtubeId: "0VOls08Y9xQ", // Example YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1570824681930-2e4c2078b6a2?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn about incredible wildlife!"
  },
  {
    id: 3,
    title: "Peafowl ",
    youtubeId: "7w0B81T6sbg", // Example YouTube video ID
    thumbnail: "https://unsplash.com/photos/a-peacock-standing-on-top-of-a-tree-branch-obc49be0-co",
    description: "Step by step drawing lessons!"
  },
  {
    id: 4,
    title: "Iron Dome Missile Works 🔢",
    youtubeId: "KpJ_g90xRuM", // Example YouTube video ID
    thumbnail: "https://plus.unsplash.com/premium_photo-1733623602251-8159d2070a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fElyb24lMjBEb21lJTIwTWlzc2lsZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Math can be super fun and easy!"
  }
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const openVideo = (index: number) => {
    setSelectedVideo(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kid-orange via-kid-yellow to-kid-green bg-clip-text text-transparent mb-4">
          Awesome Videos! 🎬
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Watch these amazing videos and learn cool stuff!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="group cursor-pointer"
            onClick={() => openVideo(index)}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 transform transition-all duration-300 group-hover:scale-110">
                    <Youtube className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  VIDEO
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-kid-purple transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videos[selectedVideo].youtubeId}?autoplay=1`}
              title={videos[selectedVideo].title}
              className="w-full h-full rounded-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-white font-bold text-xl bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                {videos[selectedVideo].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
