import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import { toast, Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GitHubService from "../services/GithubService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const search = async (login: string) => {
    try {
      const result = await GitHubService.getUserRepos(login);
      if (result) {
        navigate(`/repos/:${login}`);
      } else {
        toast.warn("User not found", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          transition: Flip,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
