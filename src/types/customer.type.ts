export interface ICustomer {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  vin: string | null;
  createdAt: Date;
  updatedAt: Date;
}
