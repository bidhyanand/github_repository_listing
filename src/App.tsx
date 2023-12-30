import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RepositoriesDetail from "./component/repositoriesDetail/RepositoriesDetail";
import Search from "./component/repositoriesSearch/Search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Search />,
    },
    
    {
      path: "/repo-detail/:owner/:name",
      element: <RepositoriesDetail />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
