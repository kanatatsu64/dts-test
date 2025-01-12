import { add } from "@/lib/utils";

describe("add", () => {
  test("和を求められる", () => {
    expect(add(1, 2)).toBe(3);
  });
});
