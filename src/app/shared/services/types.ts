import { LogLevel } from "@app/config/types";
import { JwtPayload } from "jwt-decode";

export interface LogEntry {
  type: LogLevel;
  message: string;
  data?: any;
}

export type TokenData = JwtPayload & {
  role: string;
  username: string;
  companyId: number;
}
