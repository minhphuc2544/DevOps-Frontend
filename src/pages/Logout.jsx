import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Xóa cookies
    Cookies.remove("access_token");
    Cookies.remove("username");
    Cookies.remove("id");

    // ✅ Chuyển hướng ngay lập tức
    navigate("/pages/Home");
  }, [navigate]);

  return null; 
};

export default Logout;
