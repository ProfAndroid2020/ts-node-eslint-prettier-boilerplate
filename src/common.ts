export function objectWrapper<Obj extends object>(
  obj: Obj,
  keysAndValues: Partial<Obj>
) {
  const clone = Object.assign({}, obj)
  for (const key in keysAndValues) {
    if (keysAndValues[key] !== undefined) {
      clone[key] = keysAndValues[key]
    }
  }
  return clone
}