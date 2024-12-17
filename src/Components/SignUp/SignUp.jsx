import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SignUp = () => {
  // ======================= usestate for eye icon
  const [show, setShow] = useState(false);
  //  ====================== usestate for data displaying and sending in input
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  // ======================= usestate for errors
  const [error, SetError] = useState({
    userNameError: "",
    emailError: "",
    passwordError: "",
  });
  // ======================= Firebase variable
  const auth = getAuth();

  const navigate = useNavigate();

  // ================================= Raw Functions Starts >===================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userName == "") {
      SetError((prev) => ({ ...prev, userNameError: "Username is required" }));
    }
    if (formData.email == "") {
      SetError((prev) => ({ ...prev, emailError: "Email is required" }));
    }
    if (formData.password == "") {
      SetError((prev) => ({ ...prev, passwordError: "Password is required" }));
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential);
          // ---------------- update user photo and name
          updateProfile(auth.currentUser, {
            displayName: formData.userName,
            photoURL:
              "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
          }).then(() => {
            // --------------- user varification email code
            sendEmailVerification(auth.currentUser).then(() => {});

            // ------------- email verification toast
            toast.info("Email verification has been sent", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            // ------------- Navigate to the logIn Page
            navigate('/LayoutTwo')
            
          }); // -------------------- end update profile
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode == "auth/email-already-in-use") {
            // ---------------- email error toast
            toast.error("Email already in use", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
          if (errorCode == "auth/weak-password") {
            // ------------------- password error toast
            toast.error("Password must be at least 6 characters", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
        });
    }
  };

  return (
    <>
      <div className="Mother">
        <div className="container flex justify-center items-center gap-20">
          <div className="Signbg">
            <h1 className="signHead">Sign Up</h1>
            <p className="signP">Create a new account</p>
            <form>
              <div className="info">
                {/* ============= userName input ================= */}
                <div className="same">
                  <h6 className="signLbl">Username*</h6>
                  <input
                    className="signInp"
                    type="text"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        userName: e.target.value,
                      })),
                        SetError((prev) => ({ ...prev, userNameError: "" }));
                    }}
                  />
                  <p className="error">{error.userNameError}</p>
                </div>
                {/* ============= email input ================= */}
                <div className="same">
                  <h6 className="signLbl">Email*</h6>
                  <input
                    className="signInp"
                    type="email"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      })),
                        SetError((prev) => ({ ...prev, emailError: "" }));
                    }}
                  />
                  <p className="error">{error.emailError}</p>
                </div>
                {/* ============= password input ================= */}
                <div className="same">
                  <h6 className="signLbl">Password*</h6>
                  <input
                    className="signInp"
                    type={show ? "text" : "password"}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      })),
                        SetError((prev) => ({ ...prev, passwordError: "" }));
                    }}
                  />
                  <div className="eyeIcon" onClick={() => setShow(!show)}>
                    {show ? (
                      <IoIosEye className="openeye" />
                    ) : (
                      <IoIosEyeOff className="closeeye" />
                    )}
                  </div>
                  <p className="error">{error.passwordError}</p>
                </div>
              </div>
              {/* ========= button ========= */}
              <button className="signBtn" type="submit" onClick={handleSubmit}>
                Sign Up
              </button>

              {/* =========== access another way ============ */}
              <p className="with text-[black] ">Or signup with</p>
              {/* ===================== another accounts ================= */}
              <div className="another">
                <Link to="https://www.facebook.com/">
                  <img src="/images/fb.png" alt="facebook" />
                </Link>
                <Link to="https://twitter.com/">
                  <img src="/images/twitter.png" alt="twitter" />
                </Link>
                <Link to="https://google.com/">
                  <img src="/images/google.png" alt="google" />
                </Link>
              </div>

              {/* ================ last portion ======================= */}
              <div className="lastPortion">
                <p className="text-[#798645]">Already have an account?</p>
                <Link to="/LayoutTwo">LogIn</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
