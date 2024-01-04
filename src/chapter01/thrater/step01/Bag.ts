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

	public hasInvitation(): boolean {
        return this.invitation != null;
    }
    public hasTicket(): boolean {
        return this.ticket != null;
    }

    public setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }

    public minusAmount(amount: number): void {
        this.amount -= amount;
    }
    public plusAmount(amount: number): void {
        this.amount += amount;
    }
}