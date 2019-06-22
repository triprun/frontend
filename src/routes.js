import { Index } from "./views/Index.jsx";
import { Profile } from "./views/Profile.jsx";
import { Plans } from "./views/Plans.jsx";
import { Maps } from "./views/Maps.jsx";

// import Register from "./views/examples/Register.jsx";
// import Login from "./views/examples/Login.jsx";

// import Tables from "./views/Tables.jsx";
import Icons from "./views/Icons.jsx";

var routes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-grey",
    component: Profile,
    layout: "/in",
    inner: false
  },
  {
    path: "/plans",
    name: "My Plans",
    icon: "ni ni-compass-04 text-info",
    component: Plans,
    layout: "/in",
    inner: false
  },
  // {
  //   path: "/trips",
  //   name: "My Trips",
  //   icon: "ni ni-world text-green",
  //   component: Tables,
  //   layout: "/in",
  //   inner: false
  // },
  {
    path: "/hots",
    name: "Today's Hotspots",
    icon: "fa fa-fire text-red",
    component: Index,
    layout: "/in",
    inner: false
  },
  {
    path: "/icons",
    name: "Recommended",
    icon: "fa fa-star text-yellow",
    component: Icons,
    layout: "/in",
    inner: false
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/in",
    inner: false
  }
];
export default routes;
