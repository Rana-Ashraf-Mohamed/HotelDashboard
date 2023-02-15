import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";

export function Create() {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Features, setFeature] = useState("");
  const [Image, setImage] = useState("");
  const [Rating, setRating] = useState("1");
  const [Region, setRegion] = useState("");
  const [Country, setCountry] = useState("");
  const [Pricing, setPricing] = useState("");
  
  const navigate = useNavigate();

  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHotel({Name,Description,Features,Image,Country,Region,Rating,Pricing,});
    navigate("/");
  };

  return (
    <div className="create">
      <form onSubmit={(e) => addNewHotel(e)}>
        <label>Hotel Name:</label>
        <input
          type="text"
          required
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Hotel Description:</label>
        <input
          type="text"
          required
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Main Features:</label>
        <input
          type="text"
          required
          value={Features}
          onChange={(e) => setFeature(e.target.value)}
        />
        <label>Image URL:</label>
        <input
          type="text"
          required
          value={Image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Stars Rating:</label>
        <select value={Rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Country:</label>
        <input
          type="text"
          required
          value={Country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Region:</label>
        <input
          type="text"
          required
          value={Region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <label>Pricing(£):</label>
        <input
          type="text"
          required
          value={Pricing}
          onChange={(e) => setPricing(e.target.value)}
        />
        <div><input type="submit" value="Submit"/></div>
      </form>
    </div>
  );
}
