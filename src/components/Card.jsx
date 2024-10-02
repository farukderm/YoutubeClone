import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ video }) => {
  const [isHover, setIsHover] = useState(false);

  // Varsayılan ve alternatif görüntü URL'lerini kontrol et
  const richThumbnail = video?.richThumbnail?.[0]?.url;
  const thumbnail = video?.thumbnail[video.thumbnail.length - 1]?.url;
  const source =
    isHover && richThumbnail
      ? richThumbnail
      : thumbnail || "/default-thumbnail.jpg"; // Varsayılan resim URL'si

  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
    >
      {/* Resim Alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={source}
          alt={video.title || "Video Thumbnail"}
        />
      </div>

      {/* Alt Detay Alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 rounded-full"
          src={video.thumbnail[0]?.url || "/default-channel.jpg"} // Kanal resmi için varsayılan
          alt={video.channelTitle || "Channel Thumbnail"}
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-3">
            <p>
              <span>{millify(video.viewCount)}</span>
              <span className="text-sm ms-1">Görüntülenme</span>
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
