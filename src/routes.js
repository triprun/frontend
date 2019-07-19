import { Index } from "./views/Index.jsx";
import { Profile } from "./views/Profile.jsx";
import { Plans } from "./views/Plans.jsx";
// import { Maps } from "./views/Maps.jsx";
import { News } from "./views/News.jsx";
import { Recommended } from "./views/Recommended.jsx";

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
  {
    path: "/hots",
    name: "Today's Hotspots",
    icon: "fa fa-fire text-red",
    component: Index,
    layout: "/in",
    inner: false
  },
  {
    path: "/recommended",
    name: "Recommended",
    icon: "fa fa-star text-yellow",
    component: Recommended,
    layout: "/in",
    inner: false
  },
  {
    path: "/news",
    name: "News",
    icon: "fas fa-newspaper text-blue",
    component: News,
    layout: "/in",
    inner: false
  }
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/in",
  //   inner: false
  // }
];
export default routes;
