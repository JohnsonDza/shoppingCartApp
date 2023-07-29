import { ReactElement, createContext, useState } from "react";

// Explanation: We create a TypeScript type called ProductType to define the structure of a product. It has three properties: sku, name, and price. This type ensures that any product object adheres to this structure.
export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//Explanation: We create an array called initState that holds sample products. Each product is represented as an object with a unique SKU, a name, and a price. You can add more products to this array as required.
const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

// Define the context state type:
///Explanation: We create another TypeScript type called UseProductsContextType, which represents the shape of our context state. It has a single property called products, which is an array of ProductType. This type helps maintain the structure of the data stored in the context.
export type UseProductsContextType = { products: ProductType[] };

//Initialize the context state with an empty array:
// Explanation: We create a variable called initContextState and set its value to an object with an empty array for the products property. This serves as the initial state of our context, starting with an empty array of products.
const initContextState: UseProductsContextType = { products: [] };

// Create the React Context:
//Explanation: This line creates the actual React context called ProductsContext using the createContext function from React. We provide initContextState as the default value for the context. This means that any component that consumes this context will have access to the products array, which initially is an empty array.
const ProductsContext = createContext<UseProductsContextType>(initContextState);


// Define a type for the children prop:
// Explanation: We define a TypeScript type called ChildrenType to describe the expected prop for the ProductsProvider component. It is an object with an optional children property that can accept one or multiple ReactElements as children.
type ChildrenType = { children?: ReactElement | ReactElement[] };
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create the ProductsProvider component:
// Explanation: This is a custom component called ProductsProvider. It uses the useState hook to manage the state of the products array. The ProductsProvider component wraps its children with the ProductsContext.Provider, making the products array available to all its child components through the context. Any component using ProductsProvider as its ancestor can access the product data via the context.
// The ProductsProvider component is a custom component that provides the product data to all its child components. It wraps its child components with a special React context, making the product data accessible to them.

// Define the component:
// We define a component called ProductsProvider. It takes a children prop, which represents the child components that will be wrapped inside the provider. The ReactElement return type indicates that this component returns a React element.
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    
    // Set up the state to store the products:
    // Explanation: Inside the ProductsProvider, we use the useState hook from React to set up a state variable called products. This state will store the list of products. We initialize products with the initState, which contains some sample product data as a starting point.
    const [products, setProducts] = useState<ProductType[]>(initState);

    // Wrap child components with the ProductsContext.Provider:
    // Explanation: The ProductsProvider component wraps its children components with the ProductsContext.Provider. This provider is created using the ProductsContext we defined earlier. We pass the value prop to the provider, which is an object containing the products array from our state. This value prop makes the products array accessible to all child components that consume the ProductsContext.
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Export the ProductsContext:
export default ProductsContext;
