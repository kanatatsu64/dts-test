import { add } from "@/lib/utils";

describe("add", () => {
  test("カスタムマッチャを使ってみる", () => {
    expect(add(1, 2)).toBeWithinRange(2.5, 3.5);
  });
});
