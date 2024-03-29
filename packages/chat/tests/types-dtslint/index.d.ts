export function isTypedArray<T>(arg: unknown[], guard: (toTest: unknown) => toTest is T): arg is T[] {
  return Array.isArray(arg) && arg.every(guard);
}
