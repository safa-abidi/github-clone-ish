import octocat from "../assets/octocat.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

/**
 * NotFound component displays a 404 error page when a requested page is not found.
 */
const NotFound = () => {
  const navigate = useNavigate();
  /**
   * Navigates to the homepage.
   */
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="lg:px-20 lg:py-0 md:py-5 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-12 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/10 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like this page doesn't exist.
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Button onClick={goHome}>Home</Button>
              </div>
            </div>
            <div>
              <img alt="404" src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img alt="octocat" src={octocat} className="octocat404" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
