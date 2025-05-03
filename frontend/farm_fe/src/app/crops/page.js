'use client'
import { useEffect, useState } from "react";

export default function Crops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch("http://localhost:8000/crops/list/", {
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
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Crop Name:</strong> {item.crop_name}</p>
          <p><strong>Crops Type:</strong> {item.crops_type}</p>
          <p><strong>Crops Quantity:</strong> {item.crops_quantity}</p>
          <p><strong>Crops Price:</strong> {item.crops_price}</p>
          <p><strong>Crops Quality:</strong> {item.crops_quality}</p>
          <p><strong>Crops Location:</strong> {item.crops_location}</p>
          <p>
            <strong>Crops Date:</strong>{" "}
            {new Date(item.crops_date).toLocaleString()}
          </p>
          <p><strong>Crops Farmer:</strong> {item.crops_farmer}</p>
        </div>
      ))}
    </div>
  );
}
