import { useParams } from "react-router-dom";
import ProfileSection from "../components/ProfileSection";
import GitHubService from "../services/GithubService";
import React, { useEffect, useState } from "react";
import Repo from "../components/Repo";
import SearchBar from "../components/SearchBar";
import "./Repos.css";
import RepoModel from "../models/repoModel";

const Repos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState<RepoModel[]>([]);

  const getRepos = async () => {
    if (login) {
      const result = await GitHubService.getUserRepos(login);
      if (result.length > 0) {
        console.log(result);
        setRepos(result);
      }
    }
  };
  const filterByname = () => {};

  useEffect(() => {
    getRepos();
  }, []);

  const avatarUrl: string =
    "https://avatars.githubusercontent.com/u/61377020?v=4";
  return (
    <div className="content">
      <ProfileSection
        avatarUrl={avatarUrl}
        login={login!}
        numberRepos={repos.length}
      />
      <SearchBar placeholder="Find a repository..." onSearch={filterByname} />
      <div className="repo-list">
        {repos.map((repo, index) => (
          <React.Fragment key={index}>
            <Repo repo={repo} />
            {index !== repos.length - 1 && <hr className="repo-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Repos;
