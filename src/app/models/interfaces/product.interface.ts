export interface ProductType {
  id: string;
  name: string;
  author: string;
  price: number;
  description: string;
  extraInfo?: any;
  images?: string[];
  count?: number;

  counter?: number;
  quantity?: number;
  comments?: any[];
  guarantee?: string;
  color?: string;
  cssColor?: string;
  otherIds?: string[];
}
