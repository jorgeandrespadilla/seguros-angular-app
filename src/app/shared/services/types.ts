import { LogLevel } from "@app/config/types";

export interface LogEntry {
  type: LogLevel;
  message: string;
  data?: any;
}

export interface TokenData {
  role: string;
  username: string;
  companyId: number;
}
