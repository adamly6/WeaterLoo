import { City } from "../models/City";

export interface User {
  id: number;
  password: string;
  email: string;
  cities: Pick<City, "id" | "name">[];
}
