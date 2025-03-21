import { lazy } from "react";

const ItemPageAsync = lazy(() => import("./ItemPage"));

export { ItemPageAsync as ItemPage };
