import Login from "../components/authentication/login/login";

export default function LoginPage() {
  return (
    <div
      className="grid content-center justify-items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: "gray" }}
    >
      <Login />
    </div>
  );
}
