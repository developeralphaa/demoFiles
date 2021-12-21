/** about request config */
const appURL = '/';
const BASE_URL = "http://localhost:4000";
import { http } from '../http';


export const fetch = async () => {
    try {
      const resp = await http.get(`${API}`);
      const { data }: any = resp;
      return data;
    } catch (err) {
      return err;
    }
  };