import ISearchIdResponse from "../api-interfaces/search-id-response";
import IBundleOfTickets from "../api-interfaces/bundle-of-tickets";

import { TResponse } from "../types/response";

export default class TicketsService {
  url: string = "https://front-test.beta.aviasales.ru";

  getSearchId = async (): Promise<TResponse<ISearchIdResponse>> => {
    try {
      const response = await fetch(`${this.url}/search `);
      if (response.ok) {
        const json = await response.json();
        const searchId = json as ISearchIdResponse;

        return {
          statusCode: response.status,
          status: "success",
          response: searchId,
        };
      }

      return {
        statusCode: response.status,
        status: "error",
        response: null,
      };
    } catch {
      return {
        status: "error",
        response: null,
      };
    }
  };

  getBundleOfTickets = async (
    searchId: string
  ): Promise<TResponse<IBundleOfTickets>> => {
    try {
      const response = await fetch(`${this.url}/tickets?searchId=${searchId}`);
      if (response.ok) {
        const json = await response.json();
        const bundleOfTickets = json as IBundleOfTickets;

        return {
          statusCode: response.status,
          status: "success",
          response: bundleOfTickets,
        };
      }

      return {
        statusCode: response.status,
        status: "error",
        response: null,
      };
    } catch {
      return {
        status: "error",
        response: null,
      };
    }
  };
}
