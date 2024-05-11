import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  //   getPublicContent() {
  //     return axios.get(API_URL + "all");
  //   }
  //   getModeratorBoard() {
  //     return axios.get(API_URL + 'mod', { headers: authHeader() });
  //   }

  getUserDash() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
}
