import lazy from "@/components/lazy";

const Home = lazy(() => import("@/pages/home"));

export default [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];
