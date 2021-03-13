import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10", {
      mode: "cors",
      method: "GET",
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "http://localhost:3000",
      "Access-Control-Allow-Origin": "*",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textTransform: "uppercase" }}>Contact Cards</h1>
      <div className="contacts">
        {results.map((result, index) => (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
