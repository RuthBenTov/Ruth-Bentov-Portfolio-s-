import "../src/assets/colors.scss";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import MySkills from "./pages/MySkills/MySkills";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Layout>
        <HomePage />
        <About />
        <MySkills />
        <Projects />
        <ContactPage />
      </Layout>
    </>
  );
}

export default App;
