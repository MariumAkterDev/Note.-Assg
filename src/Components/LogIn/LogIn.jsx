import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userData } from "../../Slice/counterSlice";

const LogIn = () => {
  // ======================= usestate for eye icon
  const [show, setShow] = useState(false);
  // ======================= usestate for data displaying and sending in input
  const [formData, setFormData] = useState({ email: "", password: "" });
  // ======================= usestate for error
  const [error, setError] = useState({ emailError: "", passwordError: "" });
  // =============== firebase variable
  const auth = getAuth();
  // ==================== send user's data using dispatch of Redux
  const sentUserData = useDispatch()
  // ============== Navigation variable
  const navigate = useNavigate();



  // =========================< Main Funtions >=================================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email == "") {
      setError((prev) => ({ ...prev, emailError: "Email is required" }));
    }
    if (formData.password == "") {
      setError((prev) => ({ ...prev, passwordError: "Password is required" }));
    } else {
      // ---------------------- Firebase Login code
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user.emailVerified == true) {
            // ------------------- Navigate to note pad page
            navigate("/LayoutThree");
            // --------------------- success toast
            toast.success("Successfully LogIn", {
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
            // -------------------- Store the user's Datas from login to rudux & Local storage
            sentUserData(userData(user))
            localStorage.setItem('userProfile' , JSON.stringify(user))
 
          } else {
            navigate("/LayoutTwo/SignUp");
            toast.warn("Account is not verified", {
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
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode == "auth/invalid-credential") {
            // --------------------- error toast for wrong input
            toast.warn("Something went wrong", {
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
      <div className="Mother !bg-secondColor">
        <div className="container flex justify-center items-center gap-20">
          <div className="main">
            <div className="logo">
              <Link to="/">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <h1 className="account">Account Login</h1>
            <form>
              {/* ============================= email input =========== */}
              <div className="boxOne">
                <div className="emailInput">
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      })),
                        setError((prev) => ({ ...prev, emailError: "" }));
                    }}
                  />
                  <div className="userIcon">
                    <img src="images/user.png" alt="" />
                  </div>
                </div>
                <p className="error !text-[#891414]">{error.emailError}</p>
              </div>
              {/* ============================= password input =========== */}
              <div className="boxTwo">
                <div className="passInput">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      })),
                        setError((prev) => ({ ...prev, passwordError: "" }));
                    }}
                  />
                  <div className="passIcon" onClick={() => setShow(!show)}>
                    {show ? (
                      <IoIosEye className="passClose" />
                    ) : (
                      <IoIosEyeOff className="passOpen" />
                    )}
                  </div>
                </div>
                <p className="error !text-[#891414]">{error.passwordError}</p>
              </div>
              {/* ------------- x ---------------------- */}
              <div className="txt">
                <div className="remem">
                  <input type="checkbox" />
                  <h3>Remember Me</h3>
                </div>
                <div className="frgt">
                  <Link to="">Forgot password?</Link>
                </div>
              </div>
              {/* ================ LogIn Button ============== */}
              <button
                className="buttonLog"
                type="submit"
                onClick={handleSubmit}
              >
                LogIn
              </button>
              {/* onClick={handleSubmit} button er vitore evabeo call korano jabe. abr form jsx er moddheo deya jabe  */}
              {/* ================ LogIn With ============== */}
              <p className="with">Or login with</p>
              {/* ===================== another accounts ================= */}
              <div className="another">
                <Link to="https://www.facebook.com/">
                  <img src="images/fb.png" alt="facebook" />
                </Link>
                <Link to="https://twitter.com/">
                  <img src="images/twitter.png" alt="twitter" />
                </Link>
                <Link to="https://google.com/">
                  <img src="images/google.png" alt="google" />
                </Link>
              </div>
              {/* ================ last portion ======================= */}
              <div className="lastPortion">
                <p>Don't have an account?</p>
                <Link to="/LayoutTwo/SignUp">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
