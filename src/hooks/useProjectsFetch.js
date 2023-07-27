import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export default function useProjectsFetch() {
  const [projects, setProjects] = useState(null);
  const fetchProjects = async () => {
    const col = collection(db, "projects");
    const q = query(col, orderBy("created_at", "desc"));
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

export function useGetProjectFetch(url) {
  const [project, setProject] = useState(null);
  const fetchProjects = async () => {
    const col = collection(db, "projects");
    const q = query(col, where("url", "==", url));
    await getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProject(data[0]);
    });
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return { project };
}
