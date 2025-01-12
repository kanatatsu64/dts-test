// https://jestjs.io/ja/docs/expect#expectextendmatchersより引用

export function toBeWithinRange(
  this: jest.MatcherUtils,
  actual: unknown,
  floor: unknown,
  ceiling: unknown
) {
  if (
    typeof actual !== "number" ||
    typeof floor !== "number" ||
    typeof ceiling !== "number"
  ) {
    throw new TypeError("These must be of type number!");
  }

  const pass = actual >= floor && actual <= ceiling;
  if (pass) {
    return {
      message: () =>
        // `this` context will have correct typings
        `expected ${this.utils.printReceived(
          actual
        )} not to be within range ${this.utils.printExpected(
          `${floor} - ${ceiling}`
        )}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          actual
        )} to be within range ${this.utils.printExpected(
          `${floor} - ${ceiling}`
        )}`,
      pass: false,
    };
  }
}
