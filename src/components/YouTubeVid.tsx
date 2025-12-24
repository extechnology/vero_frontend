import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "dQw4w9WgXcQ"; // 🔴 replace with your real ID

const StoryVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Frame */}
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Brand story video"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-black/20" />

            {/* Play Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
              </span>
            </button>
          </>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
            title="Brand Story Video"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      <p className="mt-6 text-sm text-muted-foreground tracking-wide text-center">
        Crafted with precision. Built to endure.
      </p>
    </div>
  );
};

export default StoryVideo;
