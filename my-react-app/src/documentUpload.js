import React, { useEffect, useState } from "react";
import axios from "axios";
const DocumentUploadForm = ({ id }) => {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [documentType, setDocumentType] = useState("");
  const [file, setFile] = useState(null);
  const [studentId, setStudentId] = useState("");

  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const token = "53|bVjng20AsJR1kNmtxfltpoprx3pT3HvnBUeNOEFi5019b4e2";
    setAuthToken(token);
    fetchDocumentTypes(authToken);
  }, []);

  const handleDocumentTypeChange = (event) => {
    // Handle document type change
    setDocumentType(event.target.value);
  };

  const handleFileChange = (event) => {
    // Handle file change
    setFile(event.target.files[0]);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  // Document Upload
  const handleUpload = async () => {
    try {
      if (!documentType || !file || !studentId) {
        console.error("Please fill out all required fields.");
        return;
      }

      const formData = new FormData();
      formData.append("file_name", file); // Change 'file' to 'file_name'
      formData.append("document_type", documentType); // Change 'documentType' to 'document_type'
      formData.append("student_id", studentId); // Change 'id' to 'student_id'

      const response = await axios.post(
        "http://localhost:8000/api/admin/student/upload-document",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Document uploaded successfully.");
        // You may want to refresh the documents or update the UI accordingly
      } else {
        throw new Error("Failed to upload document");
      }
    } catch (error) {
      console.error("Error uploading document:", error);
    }
  };

  const fetchDocumentTypes = (token) => {
    fetch(`http://localhost:8000/api/admin/student/documents-types`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDocumentTypes(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="form-container">
      <label htmlFor="studentId">Student ID</label>
      <input
        type="text"
        id="studentId"
        value={studentId}
        onChange={handleStudentIdChange}
      />
      <label htmlFor="documentType">Select Document Type</label>
      <select
        id="documentType"
        value={documentType}
        onChange={handleDocumentTypeChange}
      >
        <option value="">Select Type</option>
        {documentTypes.map((documentType) => (
          <option key={documentType.id} value={documentType.id}>
            {documentType.name}
          </option>
        ))}
      </select>

      <label htmlFor="documentFile">Upload Document</label>
      <input
        type="file"
        id="documentFile"
        accept=".pdf, .jpg, .jpeg, .png"
        onChange={handleFileChange}
      />

      <button color="primary" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default DocumentUploadForm;

// DocumentUploadForm.js
