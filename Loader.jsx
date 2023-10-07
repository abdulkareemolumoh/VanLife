import { getVans } from "./api";
import { getHostVans } from "./api";

export function vanLoader() {
  return getVans();
}

export function hostVanDetailsLoader({ params }) {
  return getHostVans(params.id);
}
