export interface OrderType {
  name: string;
  phone: string;
  message?: string;
  products: [
    {
      quantity: number;
      name: string;
      id: string;
    }
  ];
}