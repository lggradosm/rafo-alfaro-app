import { useEffect, useState } from "react";
import coverImagesService from "@services/coverImagesServices";

export default function useCoverImagesFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    coverImagesService().then((res) => {
      setData(res);
    });
  }, []);

  return { data };
}
