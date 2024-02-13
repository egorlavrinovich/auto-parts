import axios from "axios";

export class FetchService {
  static fetchData = async (filterOption) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
      params: filterOption,
    });
    return response?.data;
  };
  static addRecord = async (body) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/posts`,
      body
    );
    return response?.data;
  };
  static editRecord = async (id, body) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${id}`,
      body
    );
    return response?.data;
  };
  static deleteRecord = async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/posts/${id}`
    );
    return response?.data;
  };
}
