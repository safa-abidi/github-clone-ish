import axios, { AxiosResponse } from "axios";

/**
 * Service class for interacting with the GitHub API.
 */

class GitHubService {
  /**
   * Retrieves the repositories of a user from the GitHub API.
   * @param {string} login - The username of the user.
   * @returns {Promise<any>} - A promise that resolves to the user repositories.
   * @returns {0} - If the request fails or the response code is not 200.
   */
  static async getUserRepos(login: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(
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
