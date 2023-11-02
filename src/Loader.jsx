import { getVans } from "./Api";
import { getHostVans } from "./Api";
import { requireAuth } from "./utils";

export function vanLoader() {
  return getVans();
}

export function VanDetailsLoader({ params }) {
  return getVans(params.id);
}

export async function hostVanLoader() {
  await requireAuth();
  return getHostVans();
}

export async function hostVanDetailsLoader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}
