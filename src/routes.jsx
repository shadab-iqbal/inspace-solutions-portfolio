import {
  Home,
  Profile,
  Contact,
  Architecture,
  Interior,
  Landscape,
} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: BuildingOfficeIcon,
    name: "architecture",
    path: "/architecture",
    element: <Architecture />,
  },
  {
    icon: HomeModernIcon,
    name: "interior",
    path: "/interior",
    element: <Interior />,
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    name: "landscape",
    path: "/landscape",
    element: <Landscape />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact-us",
    element: <Contact />,
  },
];

export default routes;
