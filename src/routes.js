
import Dashboard from "views/Dashboard.js";
import Map from "views/Map.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Analytics from "views/Analytics.js"
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-square-pin",
    component: <Map />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Sensor List",
    icon: "tim-icons icon-notes",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/Analytics",
    name: "Analytics",
    icon: "tim-icons icon-puzzle-10",
    component: <Analytics />,
    layout: "/admin",
  },
];
export default routes;
