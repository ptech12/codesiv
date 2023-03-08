import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, redirect } from "react-router-dom";
// import "./Dashboard.css";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";

import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import { start } from "repl";
function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);

    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) <ScaleLoader />;
    if (!user) return navigate("/");
    fetchUserName();

  }, [user, loading]);

  const startSiv = () => {
    navigate("/code")
  }

  const hanldeLogout = () => {
    redirect("/login")
    logout()

  }
  const showSuccessToast = (msg) => {
    toast.success(msg || `Some error occured`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
      
          <div>{name} </div>
          <div>{user?.email}</div>
          {name ? showSuccessToast(`Welcome ${name}`) : null}
          <button className="dashboard__btn" onClick={startSiv}>
            Start CodeSiv
          </button>
          <button className="dashboard__btn" onClick={hanldeLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
export default Dashboard;