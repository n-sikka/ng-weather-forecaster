export class City {
    name: string;
    code: number;
    country: string;

    constructor(data?: any) {
        this.name = data ? data.name : '';
        this.code = data ? data.id : 0;
        this.country = data ? data.country : '';
    }

}