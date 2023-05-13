interface ICommonState {
  isLoading: boolean;
  error: any;
}

type IAuthState = ICommonState & {
  user: IUser | undefined;
};

type IProductsState = ICommonState & {
  products: IProduct[];
  limit: number | undefined;
  skip: number | undefined;
  total: number | undefined;
};

type IProductDetailState = ICommonState & {
  product: IProduct | undefined;
};

type ICartState = {
  cartProducts: IProduct[];
};

interface IRootState {
  auth: IAuthState;
  products: IProductsState;
  productDetail: IProductDetailState;
  cart: ICartState;
}
