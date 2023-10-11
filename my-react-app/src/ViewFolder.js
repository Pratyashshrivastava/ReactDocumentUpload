import React, { useState, useEffect } from "react";

function DataTable() {
  const [data, setData] = useState([]);

  const token = "2|IKu5Jq7CKG9hXbwBKR8pFvc5tr5tw0Icty9JMH6wb8ee1a02";

  useEffect(() => {
    fetch(
      "http://localhost:8000/api/admin/student-inside-folder/get-students?folder_id=21",
      (Headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      })
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
