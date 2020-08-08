import { createContext } from "react";

import { TBoardStore } from "../stores/board-store";

export const boardStoreContext = createContext<TBoardStore | null>(null);
