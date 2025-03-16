import { lazy } from "react";

const MissionPageAsync = lazy(() => import("./MissionPage"));

export { MissionPageAsync as MissionPage };
