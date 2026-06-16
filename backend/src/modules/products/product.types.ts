export interface CreateProductInput {
  sku: string;
  name: string;
  description?: string;
  unitPrice: number;
  quantity: number;
}

// update product input type
export interface UpdateProductInput {
  sku?: string;
  name?: string;
  description?: string;
  unitPrice?: number;
  quantity?: number;
}