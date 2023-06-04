import "./ProfileSection.css";
interface ProfileProps {
  avatarUrl: string;
  login: string;
  numberRepos: number;
}
const ProfileSection = (props: ProfileProps) => {
  return (
    <div className="profile-card">
      <img className="avatar" src={props.avatarUrl} alt="User Avatar" />
      <div className="details">
        <span className="login">{props.login}</span>
        <span className="numberRepos">Number of repos: {props.numberRepos}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
