import Index from "./views/Index.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";
// import Register from "./views/examples/Register.jsx";
// import Login from "./views/examples/Login.jsx";
import Tables from "./views/examples/Tables.jsx";
// import Icons from "./views/examples/Icons.jsx";

var routes = [
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-orange",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Latest News",
    icon: "ni ni-map-big text-yellow",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Trips",
    icon: "ni ni-world text-green",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  }
];
export default routes;
