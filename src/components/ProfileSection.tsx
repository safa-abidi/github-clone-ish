import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./ProfileSection.css";
interface ProfileProps {
  avatarUrl: string;
  login: string;
  numberRepos: number;
  html_url: string;
}

/**
 * ProfileSection component displays the profile information of a user.
 * It shows the user's avatar, login name, and the total number of repositories they have.
 */
const ProfileSection = (props: ProfileProps) => {
  return (
    <div className="profile-card">
      {props.avatarUrl ? (
          <img src={props.avatarUrl} alt="User Avatar" className="avatar"/>
        ) : (
          <FontAwesomeIcon icon={faUser} className="defaultAvatar"></FontAwesomeIcon>
        )}
      <div className="details">
        <a className="login" href={props.html_url} target="_blank" rel="noreferrer"><span>{props.login}</span></a>
        <span className="numberRepos">Number of repos: {props.numberRepos}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
