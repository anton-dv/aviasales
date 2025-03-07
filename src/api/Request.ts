import axios from "axios";
import { SearchIdResponse, TicketsResponse } from "./types/RequestTypes";

export class Request {

  static async getSearchId(): Promise<string | null> {
    return await axios.get("https://aviasales-test-api.kata.academy/search")
      .then(res => (res.data as SearchIdResponse).searchId)
      .catch(() => null);
  }


  static async loadDataFrame(id: string): Promise<TicketsResponse | null> {
    if (!(await this.getSearchId())) return null;

    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then(res => (res.data as TicketsResponse))
      .catch(() => null);

    if(!response) return null;
    return response;
  }
}

