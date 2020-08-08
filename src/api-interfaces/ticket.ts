import ISegment from "./segment";

export default interface ITicket {
  /**
   * Цена в рублях
   */
  price: number;
  /**
   * Код авиакомпании (iata)
   */
  carrier: string;
  /**
   * Массив перелётов "туда-обратно"
   */
  segments: ISegment[];
}
