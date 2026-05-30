"use client";


import { useEffect, useState } from "react";

export default function Home() {
  const [films, setFilms] = useState();
  
  useEffect(() => {
    const fetchFilms = async () => {
      const resp = await fetch('api/movies/');
      const data = await resp.json(); 
      setFilms(data);
      console.log(data);
    } 
    fetchFilms();
  }, [setFilms]);

  return (
    <div>

    </div>
  );
}
