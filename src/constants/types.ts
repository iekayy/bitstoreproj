interface Offer {
    advertiser: {
      name: string;
      transactions: number;
      rating: number;
    };
    price: string;
    quantity: string;
    limits: string;
    payment: string[];
  }

  export default Offer;