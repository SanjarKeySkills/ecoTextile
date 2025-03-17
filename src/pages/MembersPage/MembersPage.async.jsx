import { lazy } from "react";

const MembersPageAsync = lazy(() => import("./MembersPage"));

export { MembersPageAsync as MembersPage };
