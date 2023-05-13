type ParamListBase =
  import('@react-navigation/routers/src/types').ParamListBase;
type StackNavigationProp<T, R> =
  import('@react-navigation/stack').StackNavigationProp<T, R>;
type RouteProp<T, R> = import('@react-navigation/native').RouteProp<T, R>;

type BottomTabNavigationProp<T, R> =
  import('@react-navigation/bottom-tabs').BottomTabNavigationProp<T, R>;

interface RootStackParamList extends ParamListBase {
  primaryStack: PrimaryStackParamList;
}

interface DashboardTabsParamList extends ParamListBase {
  ProductsList: undefined;
  User: undefined;
}

type ProductDetailsRoutePropType = {
  id: number;
};

interface PrimaryStackParamList extends ParamListBase {
  Dashboard: undefined;
  ProductDetail: ProductDetailRouteProp;
  Cart: undefined;
}

type IPrimaryStackNavigationProp = StackNavigationProp<
  PrimaryStackParamList,
  'PrimaryStack'
>;

type IDashboardTabsNavigationProp = BottomTabNavigationProp<
  DashboardTabsParamList,
  'DashboardTabs'
>;

type IProductDetailRouteProp = RouteProp<
  Record<string, ProductDetailsRoutePropType>,
  string
>;
