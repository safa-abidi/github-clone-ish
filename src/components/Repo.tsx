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

/**
 * Repo component displays information about a repository.
 * It shows the repository name, visibility, description, language, forks count,
 * last update time, and star count.
 */
const Repo = (props: RepoProps) => {
  const formattedUpdateTime = dayjs(props.repo.updated_at).fromNow();
  return (
    <div className="repo-card">
      <div className="repo-basic-info">
        <a href={props.repo.html_url} target="_blank" rel="noreferrer" className="repo-name"><h2>{props.repo.name}</h2></a>
        <span className="visibility">{props.repo.visibility}</span>
      </div>
      <p className="repo-description">
        {props.repo.description || "No description"}
      </p>
      <div className="repo-details">
        <div className="repo-info">
          <span className="repo-language">{props.repo.language}</span>
          <span className="repo-forks">
            <FontAwesomeIcon icon={faCodeFork} />
            {props.repo.forks_count}
          </span>
          <span className="repo-updatedAt">{formattedUpdateTime}</span>
        </div>
        <div className="repo-stars">
          <FontAwesomeIcon icon={faStar} style={{ color: '#FDCC0D' }}/>
          <span className="owner-login">{props.repo.stargazers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
