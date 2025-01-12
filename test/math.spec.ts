import { add } from "@/lib/utils";

declare global {
  namespace jest {
    interface Matchers<R> {
      hoge: R;
    }
  }
}

describe("add", () => {
  test("和を求められる", () => {
    expect(add(1, 2)).toBe(3);
  });
  const b = expect(add(1, 2)).hoge;
});
