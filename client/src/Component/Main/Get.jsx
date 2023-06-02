import React, { useEffect, useState } from "react";
import axios from "axios";

function GetComponent() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/record");
        setRecords(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {records.map((record) => (
        <div key={record._id}>
          <h2>{record.title}</h2>
          <p>{record.description}</p>
          {record.images.map((image) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img key={image} src={image} alt="Record Image" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GetComponent;
