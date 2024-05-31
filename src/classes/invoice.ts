// classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor( // This only works with access modifiers
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}