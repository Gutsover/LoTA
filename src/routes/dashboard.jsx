import Bills from "views/Bills/Bills.jsx";
import Budgets from "views/Budgets/Budgets.jsx";
import Instances from "views/Instances/Instances.jsx";
import User from "views/User/User.jsx";

var dashRoutes = [
  { path: "/bills", name: "Bills", icon: "business_bank", component: Bills },

  {
    path: "/budgets",
    name: "Budgets",
    icon: "business_money-coins",
    component: Budgets
  },

  {
    path: "/instances",
    name: "Instances",
    icon: "loader_gear",
    component: Instances
  },

  { path: "/user", name: "User", icon: "users_single-02", component: User },

  { redirect: true, path: "/", pathTo: "/bills", name: "Bills" }
];
export default dashRoutes;
