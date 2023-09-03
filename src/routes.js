/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Icons from "views/Icons";


const dashboardRoutes = [

  {
    path: "/home",
    name: "HOME",
    icon: "nc-icon nc-notification-70",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/SKILLS",
    name: "SURVEY-SERVICES",
    icon: "nc-icon nc-notification-70",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/CREATIVITY",
    name: "SURVEY-PRODUCTS",
    icon: "nc-icon nc-notification-70",
    component: TableList,
    layout: "/admin"
  },
  
  {
    path: "/ABOUT US",
    name: "ABOUT US",
    icon: "nc-icon nc-notification-70",
    component: Icons,
    layout: "/admin"
  },
  
  
];

export default dashboardRoutes;
