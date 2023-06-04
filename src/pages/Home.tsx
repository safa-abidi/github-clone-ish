import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const search = () => {
    console.log("Search");
  };
  return (
    <>
      <NavBar />
      <div className="home">
        <header className="hero">
          <h1>Welcome to Github Repos</h1>
          <p>Explore github repositories by user login</p>
        </header>
        <SearchBar placeholder="Enter login... " onSearch={search} />
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Home;
