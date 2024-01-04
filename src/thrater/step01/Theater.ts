import { Audience } from "./Audience";
import { Ticket } from "./Ticket";
import { TicketSeller } from "./TicketSeller";

export class Theater {
    private ticketSeller: TicketSeller ;

    public enter(audience: Audience): void {
        if (audience.getBag().hasInvitation()) {
            let ticket: Ticket = this.ticketSeller.getTicketOffice().getTickets();
            audience.getBag().setTicket(ticket);
        } else {
			let ticket: Ticket = this.ticketSeller.getTicketOffice().getTickets();
            audience.getBag().minusAmount(ticket.getFee());
            this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
            audience.getBag().setTicket(ticket);
        }
    }
}