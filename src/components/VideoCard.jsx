function VideoCard({ video, onLike, onWatchLater, liked, saved }) {
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden w-72">
        <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h3 className="font-semibold text-lg">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.channel}</p>
          <p className="text-sm text-gray-500">{video.views} • {video.time}</p>
  
          <div className="flex justify-between mt-2">
            <button
              onClick={() => onLike(video)}
              className={`text-sm ${liked ? "text-red-500 font-bold" : "text-gray-600"}`}
            >
              ❤️ Like
            </button>
            <button
              onClick={() => onWatchLater(video)}
              className={`text-sm ${saved ? "text-blue-500 font-bold" : "text-gray-600"}`}
            >
              ➕ Watch Later
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoCard;
  