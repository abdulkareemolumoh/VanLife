import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  vanLoader,
  hostVanDetailsLoader,
  hostVanLoader,
  VanDetailsLoader,
} from "./Loader";
import NotFound from "./pages/Notfound";
import { requireAuth } from "./utils";
import Layout from "./components/Layout";
import HostNavBar from "./components/HostNavBar";
import Error from "./components/Error";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVan from "./pages/Host/HostVan";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./server";

// Exploring alternative method of loading data by using data-loader api features
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vanLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
      />

      <Route path="host" element={<HostNavBar />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVan />} loader={hostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailsLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photo"
            element={<HostVanPhoto />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
