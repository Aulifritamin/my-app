import { Header } from "components/Header";
import "./App.css";
import { Sidebar } from "components/Sidebar";
import { Content } from "components/Content";
import Login from "components/auth/login";
import { useState, useEffect } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import { browserSessionPersistence } from "firebase/auth";
import LoginForm from "components/auth/login1";
import RegistrationForm from "components/auth/register1";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebaseAuth
      .setPersistence(browserSessionPersistence)
      .then(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user: any) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });

        return () => {
          unsubscribe();
        };
      })
      .catch((error) => {
        console.log("Error setting auth persistence:", error);
      });
  }, []);
  return (
    <>
      {user ? (
        <div className="container">
          <Header />
          <Sidebar />
          <Content />
        </div>
      ) : (
        <div className="container">
          <Header />
          <Sidebar />
          {/* <Login /> */}
          {/* <LoginForm /> */}
          <RegistrationForm />
          </div>
      )}
    </>
  );
};

export default App;
