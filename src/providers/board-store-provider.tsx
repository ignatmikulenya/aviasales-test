import React, { ReactNode, useContext } from "react";
import { useLocalStore } from "mobx-react";

import { boardStoreContext } from "../contexts/board-store-context";

import BoardStore from "../stores/board-store";

type Props = {
  children: ReactNode;
};

export default function BoardStoreProvider({ children }: Props): JSX.Element {
  const store = useLocalStore(() => new BoardStore());
  return (
    <boardStoreContext.Provider value={store}>
      {children}
    </boardStoreContext.Provider>
  );
}

export const useBoardStore = (): BoardStore => {
  const store = useContext(boardStoreContext);
  if (!store) {
    throw new Error("useBoardStore must be used within provider");
  }

  return store;
};
