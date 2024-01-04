import { Ticket } from "./TicKet";

export class TicketOffice {
	private amount: number;
	private tickets: Ticket[];

	constructor(amount: number, tickets: Ticket[]) {
		this.amount = amount;
		this.tickets = [...tickets];
	}

	public getTickets(): Ticket {
		return this.tickets.shift();
	}

	public minusAmount(amount: number): void {
        this.amount -= amount;
    }

    public plusAmount(amount: number): void {
        this.amount += amount;
    }
}