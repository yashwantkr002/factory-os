export interface CreateVendorInput {
  code: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface UpdateVendorInput {
  code: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}


