import Login from "../components/authentication/login/login";
import { gray } from "@ant-design/colors";

export default function LoginPage() {
  return (
    <div
      className="grid content-center justify-items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: gray[4] }}
    >
      <Login />
    </div>
  );
}
