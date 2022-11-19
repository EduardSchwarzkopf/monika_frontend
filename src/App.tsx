import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";
import Login from "./pages/Auth/Login";

export default function App() {
  return <Dashboard children="Main"></Dashboard>;
  // return (
  //   <Auth>
  //     <Login />
  //   </Auth>
  // );
}
