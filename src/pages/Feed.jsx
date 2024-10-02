import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar sol tarafta sabit kalacak şekilde ayarlandı */}
      <Sidebar />

      {/* Sağdaki içerik alanı, kaydırma ve düzenleme için optimize edildi */}
      <div className="flex-1 p-5 overflow-y-auto h-full">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Videolar grid yapısında listeleniyor */}
            {videos?.map(
              (item) =>
                item.type === "video" && (
                  <Card video={item} key={item.videoId} />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
