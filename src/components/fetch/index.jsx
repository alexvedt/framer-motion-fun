import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_URL;
const supabaseAnonKey = import.meta.env.VITE_APIKEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Fetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("cv")
        .select("id, title, employee, from, to, skills, tasks");
      console.log(data, "data");
      console.warn(error, "error");

      if (error) {
        throw error;
      }

      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              ID: {item.id}, Title: {item.title}, Employee: {item.employee},
              From: {item.from}, To: {item.to}, Skills: {item.skills}, Tasks:{" "}
              {item.tasks}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Fetching;
