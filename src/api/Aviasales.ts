import { FilterObject } from "../store/slices/filter.slice";
import { LoaderAll, LoaderOne } from "./Loader";
import { OrderSelectorMode } from "./types/OrderSelectorMode";
import { TicketObject } from "./types/RequestTypes"

export class Aviasales {
  static ticketsOne: TicketObject[] | null = null;
  static ticketsAll: TicketObject[] | null = null;

  static #loaderOne = new LoaderOne();
  static #loaderAll = new LoaderAll();

  static async loadOne() {
    if (!Aviasales.ticketsOne) Aviasales.ticketsOne = await this.#loaderOne.load();
  }

  static async loadAll() {
    if (!Aviasales.ticketsAll) Aviasales.ticketsAll = await this.#loaderAll.load();
  }

  static async formatTickets(order: OrderSelectorMode, filter: FilterObject): Promise<TicketObject[]> {
    const tickets = Aviasales.ticketsAll || Aviasales.ticketsOne || [];
    const result = this.#filter(tickets, filter);
    return this.#sort(result, order);
  }

  static #filter(tickets: TicketObject[], filter: FilterObject): TicketObject[] {
    const matches = [filter.zero ? 0 : -1, filter.one ? 1 : -1, filter.two ? 2 : -1, filter.three ? 3 : -1];

    return tickets.filter(ticket => ticket.segments.every(segment => matches.includes(segment.stops.length)));
  }

  static #sort(tickets: TicketObject[], order: OrderSelectorMode): TicketObject[] {
    if (order === OrderSelectorMode.FASTEST) {
      return tickets.sort((ticketA, ticketB) => {
        const durationA = ticketA.segments.reduce((prev, cur) => prev + cur.duration, 0);
        const durationB = ticketB.segments.reduce((prev, cur) => prev + cur.duration, 0);
        return durationA - durationB;
      })
    }

    if (order === OrderSelectorMode.CHEAPEST) {
      return tickets.sort((ticketA, ticketB) => {
        return ticketA.price - ticketB.price;
      })
    }

    if (order === OrderSelectorMode.OPTIMAL) {
      return tickets.sort((ticketA, ticketB) => {
        const durationA = ticketA.segments.reduce((prev, cur) => prev + cur.duration, 0);
        const durationB = ticketB.segments.reduce((prev, cur) => prev + cur.duration, 0);
        return (durationA + ticketA.price) - (durationB + ticketB.price);
      })
    }

    return tickets;
  }
}
