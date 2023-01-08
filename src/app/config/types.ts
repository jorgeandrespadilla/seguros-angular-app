import { ApiConfig } from "./api.config";
import { AppConfig } from "./app.config";

export type AppConfig = typeof AppConfig;
export type ApiConfig = typeof ApiConfig;
export type Currency = typeof AppConfig.currencies[number];
