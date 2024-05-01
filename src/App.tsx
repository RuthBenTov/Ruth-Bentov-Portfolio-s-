import { useEffect, useState } from "react";
import "../src/assets/colors.scss";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import MySkills from "./pages/MySkills/MySkills";
import Projects from "./pages/Projects/Projects";
import MobileScreen from "./components/Layout/MobileScreen";

function App() {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 900)
      setMobileScreen(true);
  }, [])

  return (

    <>
      {!mobileScreen?  <Layout>
        <HomePage />
        <About />
        <MySkills />
        <Projects />
        <ContactPage />
      </Layout> :
      <MobileScreen switchForLaptop={setMobileScreen}/>
      }
     
    </>
  );
}

export default App;
