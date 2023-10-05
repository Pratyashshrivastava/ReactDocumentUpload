import logo from "./logo.svg";
import AddNewLeaveRequest from "./LeaveRequestForm";
import "./LeaveRequestForm.css"; // Import the CSS file
import DocumentUploadForm from "./documentUpload";

function App() {
  return (
    <div>
      <h1>Leave Request Form</h1>
      <DocumentUploadForm />
    </div>
  );
}

export default App;
