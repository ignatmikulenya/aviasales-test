import { SELECT_FLIGHTS_COUNT, BookingActions } from "../types";

const initialState: string[] = ["all", "0", "1", "2", "3"];

export default function flightsCountReducer(
  prevState: string[] = initialState,
  action: BookingActions
): string[] {
  switch (action.type) {
    case SELECT_FLIGHTS_COUNT:
      const flightsCount = action.payload.flightsCount;
      return prevState.includes(flightsCount)
        ? prevState.filter((x) => x !== flightsCount)
        : [...prevState, flightsCount];
    default:
      return prevState;
  }
}
