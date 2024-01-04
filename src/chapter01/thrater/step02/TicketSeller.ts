import { Audience } from "./Audience";
import { TicketOffice } from "./TicketOffice";

export class TicketSeller {
    private ticketOffice: TicketOffice;

	constructor(ticketOffice: TicketOffice) {
		this.ticketOffice = ticketOffice
	}

    public sellTo(audience: Audience): void {
        this.ticketOffice.sellTicketTo(audience);
    }
}