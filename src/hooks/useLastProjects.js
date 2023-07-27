import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
export default function useLastProjects() {
  const [projects, setProjects] = useState(null);
  const fetchProjects = async () => {
    const col = collection(db, "projects");
    const q = query(col, orderBy("created_at", "desc"), limit(6));
    await getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(data);
    });
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return { projects };
}
