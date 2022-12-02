import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Find company by search Term. */
  static async filterCompanies(handle) {
    const res = await this.request(`companies/?nameLike=${handle}`);
    return res.companies;
  }

  /** Get details on all companies. */
  static async getAllCompanies() {
    const res = await this.request('companies');
    return res.companies;
  }

  /** Get details on all jobs  */
  static async getAllJobs() {
    const res = await this.request("jobs");
    return res.jobs;
  }

  /** Find Job by search Term. */
  static async filterJobs(title) {
    const res = await this.request(`jobs/?title=${title}`);
    return res.jobs;
  }

  // TODO: Login, update user, register

  /**Register user and obtain JWT */
  static async registerUser(data) {
    const res = await this.request('auth/register', data, "post");
    return res.token;
  }

  /**Login and obtain JWT */
  static async loginUser(data) {
    const res = await this.request('auth/token', data, "post");
    return res.token;
  }

  /**Update user profile */
  static async updateUser(data, username) {
    const res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /**Get user information */
  static async getUserData(username) {
    const res = await this.request(`users/${username}`);
    return res;
  }

  /** Apply to a job  */
  static async applyToJob(jobId, username) {
    const res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
    return res;
  }


}


export default JoblyApi;