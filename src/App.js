import React, { Suspense } from "react";
import { Router } from "@reach/router";

import Store from "./utils/storeContext";

const UserSearch = React.lazy(() => import("./containers/UserSearch"));
const Item = React.lazy(() => import("./containers/Item"));

const basePath = `${process.env.PUBLIC_URL}`;

function App() {
  return (
    <Store>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <UserSearch default path={`${basePath}/`} />
          <UserSearch path={`${basePath}/user/:userId`} />
          <Item path={`${basePath}/item/:itemId`} />
        </Router>
      </Suspense>
    </Store>
  );
}

export default App;
