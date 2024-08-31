import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // loading start
      setIsPending(true);
      try {
        const req = await fetch(url);
        // console.log(req);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        // loading end 1
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        // loading end 2
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
