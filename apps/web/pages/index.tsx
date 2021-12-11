import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from "react-location";
import { VFC } from "react";
import type { Response } from "@next-fastify-turborepo/schemas";
import { ReactLocationSimpleCache } from "react-location-simple-cache";

const location = new ReactLocation();

const routeCache = new ReactLocationSimpleCache<LocationGenerics>();

export default function Web() {
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <Index />,
          loader: routeCache.createLoader(
            async () => {
              const res = await fetch("http://localhost:8080/ping");
              const json = (await res.json()) as Response;
              return { message: json.message };
            },
            { maxAge: 1000 * 10 }
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
      ]}
    >
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <h1>Web</h1>
        <Outlet />
      </div>
    </Router>
  );
}

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    message: string;
  };
}>;

const Index: VFC = () => {
  const {
    data: { message },
  } = useMatch<LocationGenerics>();
  return (
    <div>
      <h3>Welcome Home!</h3>
      <p>{message}</p>
    </div>
  );
};

const About: VFC = () => {
  return (
    <div>
      <h3>Welcome About!</h3>
    </div>
  );
};
