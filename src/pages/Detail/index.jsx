import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player/youtube";
import Channel from "./Channel";
import Description from "./Description";
import Card from "../../components/Card";
import Comments from "./Comments";

const Detail = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    const params = { id, extend: 1 };

    api
      .get(`/video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-page h-auto overflow-auto">
      <div>
        {/* Video Oynatıcı */}
        <div className="h-[50vh] lg:h-[60vh] rounded overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
            height="100%"
          />
        </div>

        {/* Açıklamalar */}
        {video && (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <Channel video={video} />
            <Description video={video} />
            <Comments videoId={id} />
          </>
        )}
      </div>

      {/* Alakalı İçerikler */}
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos?.data.map(
          (item) =>
            item.type === "video" && (
              <Card video={item} key={item.videoId} isRow />
            )
        )}
      </div>
    </div>
  );
};

export default Detail;
