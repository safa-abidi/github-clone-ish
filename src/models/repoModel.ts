import User from "./userModel";

interface RepoModel {
  created_at: string;
  description: string;
  forks_count: number;
  html_url: string;
  id: number;
  language: string;
  name: string;
  owner: User;
  stargazers_count: number;
  updated_at: string;
  visibility: string;
}

export default RepoModel;
