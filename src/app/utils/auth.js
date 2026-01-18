import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const MOCK_EMAIL = "mim1@gmail.com";
const MOCK_PASSWORD = "Mim&123";
const DEFAULT_AVATAR = "https://i.pravatar.cc/150?img=3"; 

export const login = ({ email, password }) => {
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    const userData = {
      id: uuidv4(),
      email,
      avatar: DEFAULT_AVATAR, 
      createdAt: new Date().toISOString(),
    };
    Cookies.set("user", JSON.stringify(userData), { expires: 10 });
    return true;
  }
  return false;
};

export const logout = () => {
  Cookies.remove("user");
};

export const isAuthenticated = () => {
  return Cookies.get("user") ? true : false;
};

export const getCurrentUser = () => {
  const user = Cookies.get("user");
  return user ? JSON.parse(user) : null;
};
