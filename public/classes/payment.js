// classes
export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(// This only works with access modifiers
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
