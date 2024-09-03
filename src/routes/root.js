import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>


const root = createBrowserRouter([
    {
      path: "",
      element: <Suspense fallback={Loading}><Index /></Suspense>,
    }
])

export default root;