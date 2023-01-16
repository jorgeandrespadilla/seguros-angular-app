export function tryParseJson<T>(item: string): T | null {
  try {
    JSON.parse(item) as T;
  } catch (e) {
    return null;
  }
  return JSON.parse(item) as T;
}
