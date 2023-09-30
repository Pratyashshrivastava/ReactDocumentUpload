import React, { useState } from "react";
import axios from "axios";

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    time_off_duration_count: "",
    time_off_duration: "",
    time_off_reason: "",
    start_date: "",
    document: null, // Added for file upload
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, document: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your API endpoint to receive the form data
      const apiUrl =
        "http://localhost:8000/api/admin/time-off/add-new-time-off-request";
      // Send form data using Axios
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer 24|0hed34Vl5SHhvPEiIbZNQQmh06VUjTZQHwKUYAv06fecfc4f`,
          "Content-Type": "multipart/form-data",
        },
      });
      // Response from API is in JSON format
      console.log(response.data);
      console.log("Form data submitted successfully:", response.data);
    } catch (error) {
      //   console.error("Error submitting form data:", error);
      console.log("Error details:", error);
    }
  };

  return (
    <form
      action="http://localhost:8000/api/admin/time-off/add-new-time-off-request"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      {/* Form inputs */}
      <div>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleInputChange}>
          <option value="Casual">Casual</option>
          <option value="Emergency">Emergency</option>
        </select>
      </div>

      <div>
        <label>Duration Count:</label>
        <input
          type="number"
          name="time_off_duration_count"
          value={formData.time_off_duration_count}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Duration:</label>
        <select
          name="time_off_duration"
          value={formData.time_off_duration}
          onChange={handleInputChange}
        >
          <option value="Day">Day</option>
          <option value="Hour">Hour</option>
          {/* Options for duration */}
        </select>
      </div>

      <div>
        <label>Reason:</label>
        <textarea
          name="time_off_reason"
          value={formData.time_off_reason}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Upload Document:</label>
        <input type="file" name="document" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveRequestForm;
