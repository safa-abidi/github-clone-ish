import { useParams } from "react-router-dom";
import ProfileSection from "../components/ProfileSection";
import GitHubService from "../services/GithubService";
import React, { useEffect, useState } from "react";
import Repo from "../components/Repo";
import SearchBar from "../components/SearchBar";
import "./Repos.css";
import RepoModel from "../models/repoModel";
import NavBar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Loader from "../components/Loader";

const Repos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState<RepoModel[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<RepoModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);

  const getRepos = async () => {
    setLoadingContent(true);
    if (login) {
      const result = await GitHubService.getUserRepos(login);
      if (result.length > 0) {
        console.log(result);
        setRepos(result);
        setFilteredRepos(result); // Initialize filtered repos with all repos
      }
    }
    setTimeout(() => {
      setLoadingContent(false);
    }, 500);
  };

  const filterByname = (searchInput: string) => {
    setLoading(true);
    if (searchInput.trim() === "") {
      setFilteredRepos(repos); // Show all repositories when search input is empty
    } else {
      const filtered = repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredRepos(filtered);
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <ToastContainer />
      <NavBar></NavBar>
      {loadingContent ? (
        <Loader></Loader>
      ) : (
        <div className="content">
          <ProfileSection
            avatarUrl={repos[0]?.owner.avatar_url}
            login={login!}
            numberRepos={repos.length}
            html_url={repos[0]?.owner.html_url}
          />
          <SearchBar
            placeholder="Find a repository..."
            onSearch={filterByname}
          />
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className="repo-list">
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo, index) => (
                  <React.Fragment key={index}>
                    <Repo repo={repo} />
                    {index !== filteredRepos.length - 1 && (
                      <hr className="repo-divider" />
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p className="noReposText">No repositories found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Repos;
