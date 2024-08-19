import React, { useState } from "react";
import Card from "./Card";

const CardPage = () => {
  const initialData = [
    {
      name: "Zephania Rutledge",
      phone: "1-493-723-3784",
      email: "quisque.purus.sapien@hotmail.couk",
      country: "South Africa",
      currency: "$87.62",
    },
    {
      name: "Simone Jensen",
      phone: "1-457-724-3102",
      email: "lobortis.quis@protonmail.com",
      country: "New Zealand",
      currency: "$89.52",
    },
    {
      name: "Quinlan Hardy",
      phone: "1-414-281-8733",
      email: "mauris.nulla@outlook.net",
      country: "Norway",
      currency: "$44.24",
    },
    {
      name: "Kaseem Clay",
      phone: "(336) 420-4183",
      email: "tincidunt.tempus.risus@outlook.net",
      country: "France",
      currency: "$85.77",
    },
    {
      name: "Stephen Lane",
      phone: "(227) 706-6385",
      email: "sem@aol.ca",
      country: "Sweden",
      currency: "$73.42",
    },
    {
      name: "Ruinan Tardy",
      phone: "1-514-261-8753",
      email: "mauris.nulla@outlook.net",
      country: "Iceland",
      currency: "$35.24",
    },
    {
      name: "Kareem Barclay",
      phone: "(336) 420-4343",
      email: "rincidunt.tempus.risus@outlook.net",
      country: "Mali",
      currency: "$45.77",
    },
    {
      name: "Stephanie Ane",
      phone: "(227) 706-8385",
      email: "steane@aol.ca",
      country: "Hungary",
      currency: "$85.42",
    },
  ];
  // Added 3 more to the data

  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // const filteredByCurrency = (currency) => {
  //   const filtered = data.filter(
  //     (person) => parseFloat(person.currency.replace("$", "")) < 50
  //   );
  //   setFilteredData(filtered);
  // };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    const filtered = data.filter((person) =>
      person.name.toLowerCase().includes(searchQuery)
    );
    setFilteredData(filtered);
  };

  const handleFilterByCurrency = () => {
    const filtered = data.filter(
      (person) => parseFloat(person.currency.replace("$", "")) < 50
    );
    setFilteredData(filtered);
  };

  return (
    <div className="cardpage">
      <div className="cardpage_head">
        <input
          className="search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <button className="button" onClick={handleFilterByCurrency}>
          Filter by Currency (less than $50)
        </button>
      </div>

      <div className="card-wrap">
        {filteredData.map((person, index) => (
          // <div key={index} className="card">
          //   <h2>{person.name}</h2>
          //   <p>Phone: {person.phone}</p>
          //   <p>Email: {person.email}</p>
          //   <p>Country: {person.country}</p>
          //   <p>Discounted Currency: {person.currency}</p>
          // </div>
          <Card
            key={index}
            name={person.name}
            phone={person.phone}
            email={person.email}
            country={person.country}
            currency={person.currency}
          />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
