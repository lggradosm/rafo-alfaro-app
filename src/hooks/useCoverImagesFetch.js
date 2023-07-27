import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export default function useCoverImagesFetch() {
  const [data, setData] = useState(null);
  const fetchCovers = async () => {
    await getDocs(collection(db, "covers")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  };
  useEffect(() => {
    fetchCovers();
  }, []);

  return { data };
}
