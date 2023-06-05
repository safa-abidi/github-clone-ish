import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import { toast, Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GitHubService from "../services/GithubService";
import { useNavigate } from "react-router-dom";

/**
 * Home component displays the homepage of the application.
 */
const Home = () => {
  const navigate = useNavigate();

  /**
   * Displays a toast message.
   * @param {string} message - The message to display in the toast.
   */
  const displayToast = (message: string) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      transition: Flip,
    });
  };

  /**
   * Handles the search of user by login.
   * @param {string} login - The login to search for.
   */
  const search = async (login: string) => {
    if (!login) {
      displayToast("Please enter a login");
      return;
    }
    try {
      const result = await GitHubService.getUserRepos(login);
      if (result) {
        navigate(`/repos/${login}`);
      } else {
        displayToast("User not found");
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
