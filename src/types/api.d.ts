type ILoginRequest = {
  username: string;
  password: string;
};

type IProductsResponse = {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
};
