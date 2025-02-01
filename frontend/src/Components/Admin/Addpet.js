import { useState } from "react";
import axios from "axios";
import "./addpet.css";
const PetForm = () => {
  const [formData, setFormData] = useState({
    animal: "",
    petName: "",
    avatar: null,
    age: "",
    description: "",
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const form = new FormData();
    form.append("animal", formData.animal);
    form.append("petName", formData.petName);
    form.append("avatar", formData.avatar);
    form.append("age", formData.age);
    form.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/pet/addPet",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data.message);
      setFormData({
        animal: "",
        petName: "",
        avatar: null,
        age: "",
        description: "",
      });
      setPreview(null);
    } catch (error) {
      setMessage("Error adding pet");
    }
  };

  return (
    <div>
      <h2>Pet Information Form</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Animal Type:</label>
        <input
          type="text"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          required
        />

        <label>Pet Name:</label>
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          required
        />

        <label>Avatar (Image):</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100px", height: "100px" }}
          />
        )}

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PetForm;
