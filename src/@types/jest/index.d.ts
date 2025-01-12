declare global {
  module jest {
    interface Matchers<R, T> {
      toBeWithinRange(floor: number, ceiling: number): R;
    }
  }
}
export {};
