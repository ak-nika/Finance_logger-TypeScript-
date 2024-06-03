import { HasFormatter } from "../interfaces/hasFormatter"

// classes
export class Payment implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor( // This only works with access modifiers
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    format(){
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }
}