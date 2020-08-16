import { createContext } from "react";

import BoardStore from "../stores/board-store";

export const boardStoreContext = createContext<BoardStore | null>(null);
