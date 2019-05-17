import Index from "./views/Index.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";
// import Register from "./views/examples/Register.jsx";
// import Login from "./views/examples/Login.jsx";
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";

var routes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-grey",
    component: Profile,
    layout: "/in"
  },
  {
    path: "/my_trips",
    name: "My Plans",
    icon: "ni ni-compass-04 text-orange",
    component: Profile,
    layout: "/in"
  },
  {
    path: "/trips",
    name: "My Trips",
    icon: "ni ni-world text-green",
    component: Tables,
    layout: "/in"
  },
  {
    path: "/index",
    name: "Today's Hotspots",
    icon: "fa fa-fire text-red",
    component: Index,
    layout: "/in"
  },
  {
    path: "/icons",
    name: "Recommended",
    icon: "fa fa-star text-yellow",
    component: Icons,
    layout: "/in"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/in"
  },
];
export default routes;
