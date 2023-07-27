import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useProjectCoverFetch = () => {
  const [projectCoverImage, setProjectCoverImage] = useState(null);
  const fetchProjectCover = async () => {
    await getDocs(collection(db, "projects_cover")).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjectCoverImage(data[0]);
    });
  };
  useEffect(() => {
    fetchProjectCover();
  }, []);
  return { projectCoverImage };
};
export default useProjectCoverFetch;
