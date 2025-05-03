'use client'
import { useEffect, useState } from "react";

export default function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch("http://localhost:8000/farmer/list/", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch farmers data");
        }
        const data = await response.json();
        setFarmers(data);
      } catch (err) {
        console.error("Error fetching farmers:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {farmers.map((farmer) => (
        <div key={farmer.id} className="bg-primary p-4 my-2 rounded shadow">
          <h3 className="text-lg font-semibold">Name: {farmer.name}</h3>
          <p><strong>ID: {farmer.id}</strong></p>
          <p><strong>Age:</strong> {farmer.age} years</p>
          <p><strong>Location:</strong> {farmer.location}</p>
          <p><strong>Land Size:</strong> {farmer.land} acres</p>
          <p><strong>Crops:</strong> {farmer.crops.length > 0 ? farmer.crops.join(", ") : "No crops available"}</p>
        </div>
      ))}
    </div>
  );
}
