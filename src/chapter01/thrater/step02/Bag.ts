import { Invitation } from "./Invitation";
import { Ticket } from "./Ticket";

export class Bag {
	private amount: number;
	private invitation: Invitation | null;
	private ticket: Ticket;

	constructor(amount: number, invitation: Invitation | null);

    constructor(amount: number, invitation: Invitation | null = null) {
        this.amount = amount;
        this.invitation = invitation;
    }
    
    public hold(ticket: Ticket): number {
        if (this.hasInvitation()) {
            this.setTicket(ticket);
            return 0;
        }
        this.setTicket(ticket);
        this.minusAmount(ticket.getFee());
        return ticket.getFee();
    }

	private hasInvitation(): boolean {
        return this.invitation != null;
    }
    public hasTicket(): boolean {
        return this.ticket != null;
    }

    private setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }

    private minusAmount(amount: number): void {
        this.amount -= amount;
    }
    public plusAmount(amount: number): void {
        this.amount += amount;
    }
}