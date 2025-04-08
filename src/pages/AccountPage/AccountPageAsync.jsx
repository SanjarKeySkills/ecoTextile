import { lazy } from "react";

const AccountPageAsync = lazy(() => import("./AccountPage"));

export { AccountPageAsync as AccountPage };
