import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const search = () => {};
  return (
    <>
      <NavBar />
      <div className="home">
        <header className="hero">
          <h1>Welcome to Github Repos</h1>
          <p>Explore github repositories by user login</p>
        </header>
        <div className="search-bar">
          <input type="text" placeholder="Enter login ..." />
          <Button onClick={search}>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
