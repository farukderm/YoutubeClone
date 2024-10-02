import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants"; // categories import edildi
import axios from "axios";
import api from "../utils/api";
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(categories[0]); // İlk kategori olarak categories[0] kullanılıyor
  const [error, setError] = useState(null);
  useEffect(() => {
    let type = category.type;

    //seçilen kategori menü tipinde ise fonksiyonu durdur

    if (type === "menu") return;

    // istek atılacak url

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;

    setIsLoading(true);
    //api isteği at
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <VideoContext.Provider
      value={{ videos, category, isLoading, error, setCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
