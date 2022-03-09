import { seller } from "./detail";

export class Product {
        public id: string;
        public pName: string;
        public pDescription: string;
        public pRating: number;
        public pCategory: string;
        public price: number;
        public color: string;
        public image: string;
        public specification: string;
        public dataFirstAvailable: Date;
        public dataLastAvailable: Date;
        public pSeller: seller;
}
