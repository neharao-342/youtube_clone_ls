import { useEffect, useState } from "react";
import { dummyVideos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";
import Timer from "../components/Timer";

function Home() {
  const [liked, setLiked] = useState(() =>
    JSON.parse(sessionStorage.getItem("liked")) || []
  );
  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem("watchLater")) || []
  );

  useEffect(() => {
    sessionStorage.setItem("liked", JSON.stringify(liked));
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [liked, watchLater]);

  const toggleLike = (video) => {
    setLiked(prev =>
      prev.find(v => v.id === video.id)
        ? prev.filter(v => v.id !== video.id)
        : [...prev, video]
    );
  };

  const toggleWatchLater = (video) => {
    setWatchLater(prev =>
      prev.find(v => v.id === video.id)
        ? prev.filter(v => v.id !== video.id)
        : [...prev, video]
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📹 Recommended</h2>
      <div className="flex flex-wrap gap-6">
        {dummyVideos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onLike={toggleLike}
            onWatchLater={toggleWatchLater}
            liked={liked.some(v => v.id === video.id)}
            saved={watchLater.some(v => v.id === video.id)}
          />
        ))}
      </div>
      <Timer />
    </div>
  );
}

export default Home;
