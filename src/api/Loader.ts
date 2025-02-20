import { Request } from "./Request";
import { TicketObject } from "./types/RequestTypes";

export interface ILoader {
  load: (fromStart?: boolean) => Promise<TicketObject[]>;
}

export abstract class Loader {
  id: string | null = null;

  async loadId(fromStart?: boolean): Promise<boolean> {
    if (!fromStart && this.id) return true;
    this.id = await Request.getSearchId();
    return !!this.id;
  }
}

export class LoaderOne extends Loader implements ILoader {
  async load(fromStart?: boolean): Promise<TicketObject[]> {
    if (!await this.loadId(fromStart)) return [];

    while (true) {
      const response = await Request.loadDataFrame(this.id as string);
      if (response) return response.tickets;
    }
  }
}

export class LoaderAll extends Loader implements ILoader {
  async load(fromStart?: boolean): Promise<TicketObject[]> {
    if (!await this.loadId(fromStart)) return [];

    let result: TicketObject[] = [];
    while (true) {
      const response = await Request.loadDataFrame(this.id as string);

      if (response) result = result.concat(response.tickets);
      if (response?.stop) return result;
    }
  }
}

