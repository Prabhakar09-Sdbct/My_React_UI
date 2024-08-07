import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth.service';

const API_URL = "http://localhost:9106/api/user/";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + 'welcome', { headers: authHeader() });
  }

  getTableData() {
    return axios.get(API_URL + 'preload', { headers: authHeader() });
  }

  getUserByLoginId() {
    const data = authService.getCurrentUser();
    return axios.get(API_URL + 'profile/' + data.loginId, { headers: authHeader() });
  }
}

export default new UserService();