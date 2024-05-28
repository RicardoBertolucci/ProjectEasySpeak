import axios from 'axios';
const BASE_URL = `http://localhost:8080`

export default class API {
  static async login(user) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, user);
      console.log(response.data)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }

  static async fetchConsultas() {
    try {
      const response = await axios.get(`${BASE_URL}/consultation`);
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  static async fetchDoctors() {
    try {
      const response = await axios.get(`${BASE_URL}/users/doctors`);
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }
}