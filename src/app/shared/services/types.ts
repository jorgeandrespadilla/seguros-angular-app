import { LogLevel } from "@app/config/types";

export interface LogEntry {
  type: LogLevel;
  message: string;
  data?: any;
}
