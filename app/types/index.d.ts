interface IProduct {
  id: string;
  productImageUrl?: string; // Use `?` for optional fields instead of `| undefined`
  productName?: string;
  quantity: number;
  unitPrice: number;
}

interface IResponse<T = unknown> { // Use a generic type parameter with a default of `unknown`
  response: {
    data: T;
  };
}

interface IProductInput {
  id: string;
  qty: number;
}
