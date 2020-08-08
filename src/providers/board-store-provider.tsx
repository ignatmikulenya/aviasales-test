import React, { ReactNode } from "react";
import { useLocalStore } from "mobx-react";

import { boardStoreContext } from "../contexts/board-store-context";

import createBoardStore from "../stores/board-store";

type Props = {
  children: ReactNode;
};

export default function BoardStoreProvider({ children }: Props) {
  const store = useLocalStore(createBoardStore);
  return (
    <boardStoreContext.Provider value={store}>
      {children}
    </boardStoreContext.Provider>
  );
}
