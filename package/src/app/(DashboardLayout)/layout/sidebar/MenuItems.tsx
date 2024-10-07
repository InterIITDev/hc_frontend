import {
  IconCopy,
  IconLayoutDashboard,
IconWriting
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },

  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  {
    navlabel: true,
    subheader: "Prescription",
  },
  {
    id: uniqueId(),
    title: "Scribble Pad",
    icon: IconWriting,
    href: "/icons",
  }
];

export default Menuitems;
