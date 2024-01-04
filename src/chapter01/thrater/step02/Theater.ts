import { Audience } from "./Audience";
import { TicketSeller } from "./TicketSeller";

export class Theater {
    private ticketSeller: TicketSeller ;

    public enter(audience: Audience): void {
        this.ticketSeller.sellTo(audience);
    }
}