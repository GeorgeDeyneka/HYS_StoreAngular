export interface ProductType {
  id: string;
  name: string;
  author: string;
  price: number;
  description: string;
  extraInfo?: any;
  count?: number;
  images?: string[]
}
