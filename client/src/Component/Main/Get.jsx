import React, { useEffect } from "react";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://dull-plum-stingray-suit.cyclic.app/record"
      );
      dispatch(setAllDetails(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(
        `https://dull-plum-stingray-suit.cyclic.app/record/${_id}`
      );
      dispatch(ActionDelete(_id));
      toast.success("Record deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete record");
    }
  };
  const data = useSelector((store) => store.AllDetails);
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
//added all CRUD operations
//added all CRUD operations
