import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  InputLabel,
  Input,
  DialogActions,
} from "@mui/material";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";

function PutComponent({ _id }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataImage, setDataImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imagefinal, setimagedata] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (e) => {
    const data = new FormData();
    const selectedImage = e.target.files[0];
    data.append("file", selectedImage);
    data.append("upload_preset", "Tumblr");
    data.append("cloud_name", "dgqt5ockx");
    setDataImage(data);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const CloudinaryUpload = async (data) => {
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgqt5ockx/image/upload",
        data
      );
      setImageUrl(response.data.url);
      setimagedata(response.data.url);
      console.log(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataImage) {
      toast.error("Please upload an image!");
      return;
    }

    try {
      await CloudinaryUpload(dataImage);
      const data = {
        title: title,
        description: description,
        images: imagefinal,
      };
      const response = await axios.put(
        `http://localhost:8080/record/${_id}`,
        data
      );
      console.log(response.data);
      toast.success("Post added!");
    } catch (error) {
      console.error(error);
      toast.error("Post failed to add!");
    }
  };

  const handleSecondSubmit = async () => {
    if (!dataImage) {
      toast.error("Please upload an image!");
      return;
    }

    try {
      await CloudinaryUpload(dataImage);
      const data = {
        title: title,
        description: description,
        images: imageUrl,
      };
      console.log("cloudinary ke andar", imageUrl);
      const response = await axios.put(
        `http://localhost:8080/record/${_id}`,
        data
      );
      console.log(response.data);
      toast.success("Done!");
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Something Error!");
    }
  };

  return (
    <>
      <br />
      <Button
        variant="outline-dark"
        style={{ width: "6rem" }}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do Post Something...!</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <InputLabel>
              Select an image to upload:
              <Input type="file" accept="image/*" onChange={handleImage} />
            </InputLabel>
            {previewImage && (
              <div>
                <img
                  src={previewImage}
                  alt="Preview"
                  width={300}
                  height={300}
                />
              </div>
            )}
            <Button id="login" type="submit" size="large" variant="contained">
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSecondSubmit}>Close</Button>{" "}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PutComponent;
