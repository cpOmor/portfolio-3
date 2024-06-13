import { jwtDecode } from "jwt-decode";

const verifyToken = (token) => {
  // return jwtDecode(token);

  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    return null;
  }
};

export default verifyToken;
