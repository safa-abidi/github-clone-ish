import RepoModel from "../models/repoModel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./Repo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

dayjs.extend(relativeTime);

interface RepoProps {
  repo: RepoModel;
}
const Repo = (props: RepoProps) => {
  const formattedUpdateTime = dayjs(props.repo.updated_at).fromNow();
  return (
    <div className="repo-card">
      <h2 className="repo-name">{props.repo.name}</h2>
      <p className="repo-description">{props.repo.description}</p>
      <div className="repo-details">
        <div className="repo-info">
          <span className="repo-language">{props.repo.language}</span>
          <span className="repo-updatedAt">{formattedUpdateTime}</span>
          <span className="repo-forks">
            <FontAwesomeIcon icon={faCodeFork} />
            {props.repo.forks_count}
          </span>
        </div>
        <div className="repo-stars">
          <FontAwesomeIcon icon={faStar} />
          <span className="owner-login">{props.repo.stargazers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;