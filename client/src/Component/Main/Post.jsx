import React, { useState } from "react";
import axios from "axios";

const PostRecord = () => {
  const [newRecord, setNewRecord] = useState({
    title: "",
    description: "",
    images: [],
  });

  const createRecord = async () => {
    try {
      const response = await axios.post("/record", newRecord);
      console.log(response.data);
      setNewRecord({ title: "", description: "", images: [] });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create New Record</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={newRecord.title}
          onChange={(e) =>
            setNewRecord({ ...newRecord, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={newRecord.description}
          onChange={(e) =>
            setNewRecord({ ...newRecord, description: e.target.value })
          }
        />
      </div>
      <div>
        <label>Images:</label>
        <input
          type="text"
          value={newRecord.images.join(",")}
          onChange={(e) =>
            setNewRecord({ ...newRecord, images: e.target.value.split(",") })
          }
        />
      </div>
      <button onClick={createRecord}>Create Record</button>
    </div>
  );
};

export default PostRecord;
