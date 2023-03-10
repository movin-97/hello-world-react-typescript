import JwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const useAuth = () => {
  let accessToken = useSelector((state: any) => state.token);
  let expired = true;
  
  if (accessToken) {
    const tokenParsed:any = JwtDecode(accessToken);

    const date = new Date(0);
    const exp = parseInt(tokenParsed.exp);
    if (!isNaN(exp)) date.setUTCSeconds(exp);
    expired = date < new Date();
  }
  return expired;
};

export default useAuth;