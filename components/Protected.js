import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const router = useRouter();

  if (!user) {
    router.replace("/");
  }

  return children;
};

export default Protected;
