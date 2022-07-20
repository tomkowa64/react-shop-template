import { ApiClient } from "./ApiClient";
import { Product } from "../models/Product";

class ProductService extends ApiClient {
  private static classInstance?: ProductService;
  private products!: Product[];

  public constructor() {
    super("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6");
  }

  public async getProducts(): Promise<Product[]> {
    this.products = await this.http
      .get<Product[]>("")
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
    return this.products;
  }

  public async getProduct(id: number): Promise<Product> {
    if (this.products === undefined) {
      this.getProducts();
    }
    return this.ensureFind(
      this.products.find((product: Product) => product.id === id)
    );
  }

  public static getInstance() {
    if (this.classInstance == null) {
      this.classInstance = new ProductService();
    }
    return this.classInstance;
  }
}

export const productApiService: ProductService = ProductService.getInstance();
