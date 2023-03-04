import {
  Home,
  Profile,
  SignIn,
  Contact,
  Architecture,
  Interior,
  Landscape,
} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: HomeIcon,
    name: "architecture",
    path: "/architecture",
    element: <Architecture />,
  },
  {
    icon: HomeIcon,
    name: "interior",
    path: "/interior",
    element: <Interior />,
  },
  {
    icon: HomeIcon,
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
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact-us",
    element: <Contact />,
  },
];

export default routes;
