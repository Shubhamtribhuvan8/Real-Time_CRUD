import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAllDetails, ActionDelete } from "../Redux/Action";
import Button from "react-bootstrap/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PutComponent from "./Put";

const GetComponent = () => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const data = useSelector((store) => store.AllDetails);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Establish a connection with the Socket.IO server
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for "recordCreated" event
      socket.on("recordCreated", (record) => {
        dispatch(setAllDetails([...data, record]));
      });

      // Listen for "recordDeleted" event
      socket.on("recordDeleted", (recordId) => {
        dispatch(ActionDelete(recordId));
      });
    }
  }, [socket, data, dispatch]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/record");
      dispatch(setAllDetails(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8080/record/${_id}`);
      socket.emit("deleteRecord", _id);
      toast.success("Record deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete record");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {data &&
        data.map((record) => (
          <Card key={record._id} sx={{ maxWidth: isMobile ? "100%" : 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={record.images}
                alt="Record Image"
              />
              <CardContent style={{ width: "100%" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {record.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {record.details}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {record.description}
                </Typography>
                <Button
                  variant="outline-dark"
                  style={{ width: "6rem" }}
                  onClick={() => handleDelete(record._id)}
                >
                  Delete
                </Button>
                <PutComponent _id={record._id} />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};

export default GetComponent;
