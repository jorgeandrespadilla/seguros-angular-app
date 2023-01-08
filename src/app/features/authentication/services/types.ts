import { Currency } from "@config/types";

export interface LoginRequest {
  username: string;
  password: string;
  currency: Currency;
}

export interface LoginResponse {
  token: string;
}
