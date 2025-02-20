import { Request } from "./Request";
import { TicketObject } from "./types/RequestTypes";

export class Carriers {

  static #itas?: Map<string, string>;

  static get(ita: string): string | undefined {
    if(!this.#itas) return undefined;
    return this.#itas.get(ita) || undefined;
  }

  static async loadImages(tickets: TicketObject[]) {
    const itas = new Set<string>();
    tickets.forEach(ticket => itas.add(ticket.carrier));

    const itasMap = new Map<string, string>();

    for(const ita of itas) {
      const image = await Request.loadImage(ita);
      if(image) itasMap.set(ita, image);
    }

    this.#itas = itasMap;
  }
}
