import Header from "./Header";
import google from "../img/google.png";
import github from "../img/git.png";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "./login.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

import { adduser, deleteuser } from "../store/ProductSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const provider = new GithubAuthProvider();
  const githubProvider = new GoogleAuthProvider(); // Corrected to use GithubAuthProvider

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          adduser({
            id: user.id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1600);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          adduser({
            id: user.id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1600);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Logged Out Successfully!");
        dispatch(deleteuser());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <div className="login">
        <div className="ms">
          <div className="iconsocial" onClick={handleGoogleLogin}>
            <img src={google} alt="g" />
            <span>Sign in With Google</span>
          </div>
          <Button variant="secondary" onClick={handleSignOut}>
            Logout
          </Button>
        </div>
        <div className="ms">
          <div className="iconsocial" onClick={handleGithubLogin}>
            <img src={github} alt="g" />
            <span>Sign in With GitHub</span>
          </div>
          <Button variant="secondary" onClick={handleSignOut}>
            Logout
          </Button>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Login;
