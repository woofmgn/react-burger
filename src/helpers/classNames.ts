export function classNames(cls: string, mods: { [s: string]: unknown; } | ArrayLike<unknown>, additional: any[]) {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
