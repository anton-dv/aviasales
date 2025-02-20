export type SearchIdResponse = {
  searchId: string;
}

export type TicketsResponse = {
  tickets: TicketObject[];
  stop: boolean;
}

export type TicketObject = {
  price: number;
  carrier: string;
  segments: SegmentsObject[];
}

export type SegmentsObject = {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}
