'use client'
import { useEffect, useState } from "react";

export default function Crops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch("http://localhost:8000/farmer/list/", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch crops data");
        }
        const data = await response.json();
        setCrops(data);
        console.log("Current state value:", data);
      } catch (err) {
        console.error("Error fetching crops:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Crops Component</h2>
      {crops.map((item) => (
        <div key={item.id} className="bg-primary p-4 my-2 rounded">
          asd
        </div>
      ))}
    </div>
  );
}
