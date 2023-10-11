// import logo from "./logo.svg";
// import AddNewLeaveRequest from "./LeaveRequestForm";
// import "./LeaveRequestForm.css"; // Import the CSS file
// import DocumentUploadForm from "./documentUpload";

// function App() {
//   return (
//     <div>
//       <h1>Leave Request Form</h1>
//       <DocumentUploadForm />
//     </div>
//   );
// }

// export default App;

/*App.js*/

/*App.js*/

// import React, { useState, useEffect } from "react";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// function App() {
//   const [user, setUser] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log("Login Failed:", error),
//   });

//   useEffect(() => {
//     if (user) {
//       axios
//         .get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           setProfile(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);

//   // log out function to log the user out of google and set the profile array to null
//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//   };

//   return (
//     <div>
//       <h2>React Google Login</h2>
//       <br />
//       <br />
//       {profile ? (
//         <div>
//           <img src={profile.picture} alt="user image" />
//           <h3>User Logged in</h3>
//           <p>Name: {profile.name}</p>
//           <p>Email Address: {profile.email}</p>
//           <br />
//           <br />
//           <button onClick={logOut}>Log out</button>
//         </div>
//       ) : (
//         <button onClick={() => login()}>Sign in with Google 🚀 </button>
//       )}
//     </div>
//   );
// }
// export default App;

import React from "react";
import DataTable from "./ViewFolder";

function App() {
  return (
    <div className="App">
      <h1>Data Table Example</h1>
      <DataTable />
    </div>
  );
}

export default App;
