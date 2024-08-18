import ShortUniqueId from "short-unique-id";

export function generateShortUUID(length = 10) {
  return new ShortUniqueId({ length }) as unknown as string;
}
