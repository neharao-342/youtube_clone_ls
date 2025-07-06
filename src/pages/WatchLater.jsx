// src/pages/WatchLater.jsx
import { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

function WatchLater() {
  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem("watchLater")) || []
  );

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  const removeFromWatchLater = (video) => {
    setWatchLater(prev => prev.filter(v => v.id !== video.id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📺 Watch Later</h2>
      {watchLater.length === 0 ? (
        <p className="text-gray-600">No videos saved to watch later.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {watchLater.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onLike={() => {}} // optional
              onWatchLater={removeFromWatchLater}
              liked={false}
              saved={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchLater;
