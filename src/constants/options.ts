import { TOption } from "../types/option";

import { TicketType } from "../enums";

export const SELECT_ALL_VALUE = "all";

export const DEFAULT_FILTER_VALUES = [SELECT_ALL_VALUE, "0", "1", "2", "3"];

export const TICKET_TYPE_OPTIONS: TOption[] = [
  { value: TicketType.Сheapest, text: "Самый дешевый" },
  { value: TicketType.Fastest, text: "Самый быстрый" },
];

export const STOPS_COUNT_OPTIONS: TOption[] = [
  { value: SELECT_ALL_VALUE, text: "Все" },
  { value: "0", text: "Без пересадок" },
  { value: "1", text: "1 пересадка" },
  { value: "2", text: "2 пересадки" },
  { value: "3", text: "3 пересадки" },
];
