import axios, { AxiosResponse } from "axios";
import RepoModel from "../models/repoModel";

/**
 * Service class for interacting with the GitHub API.
 */

class GitHubService {
  /**
   * Retrieves the repositories of a user from the GitHub API.
   * @param {string} login - The username of the user.
   * @returns {Promise<RepoModel[]>} - A promise that resolves to an array of user repositories.
   * @returns {number} - Returns 0 if the request fails or the response code is not 200.
   */

  static async getUserRepos(login: string): Promise<any> {
    try {
      const response: AxiosResponse<RepoModel[]> = await axios.get(
        `https://api.github.com/users/${login}/repos`
      );
      // Check for successful response code (200)
      if (response.status === 200) {
        return response.data;
      } else {
        return 0;
      }
    } catch (error) {
      console.error("Error retrieving user repositories:", error);
      return 0;
    }
  }
}

export default GitHubService;
