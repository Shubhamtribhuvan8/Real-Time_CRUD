import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, InputLabel } from "@mui/material";
import { toast } from "react-toastify";

function PostComponent() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [dataImage, setDataImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
    data.append("upload_preset", "Record");
    data.append("cloud_name", "dq1zrwz3r");
    setDataImage(data);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const CloudinaryUpload = async (data) => {
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dq1zrwz3r/image/upload",
        data
      );
      setImageUrl(response.data.url);
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

    const data = {
      title: username,
      description: description,
      images: [], // Initialize the images array as empty
    };

    try {
      await CloudinaryUpload(dataImage);
      data.images.push(imageUrl);
      console.log("cloudinary ke andar", imageUrl);
      const response = await axios.post("http://localhost:8080/record", data);
      console.log(response.data);
      toast.success("Post added!");
    } catch (error) {
      console.error(error);
      toast.error("Post failed to add!");
    }
  };

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Post Images!
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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
                <img src={previewImage} alt="Preview" />
              </div>
            )}
            <Button id="login" type="submit" size="large" variant="contained">
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostComponent;
