import React, { Suspense } from "react";
import { Router } from "@reach/router";

import Store from "./utils/storeContext";

const UserSearch = React.lazy(() => import("./containers/UserSearch"));
const Item = React.lazy(() => import("./containers/Item"));

function App() {
  return (
    <Store>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <UserSearch path="/" />
          <UserSearch path="/user/:userId" />
          <Item path="/item/:itemId" />
        </Router>
      </Suspense>
    </Store>
  );
}

export default App;
