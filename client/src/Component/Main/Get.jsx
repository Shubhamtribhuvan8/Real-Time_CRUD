/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllDetails } from "../Redux/Action";
function GetComponent() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/record");
        console.log(response.data);
        // dispatch(setAllDetails(response.data));
        setAllDetails(dispatch, response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);

  const data = useSelector((Store) => Store.AllDetails);
  return (
    <div>
      {data &&
        data.map((record) => (
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