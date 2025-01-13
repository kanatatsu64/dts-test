## 環境構築

```shell
mkdir dts-test
cd dts-test
npm init
npm install typescript ts-node jest ts-jest @types/jest
npx tsc --init
npx ts-jest config:init
```

## 実行

```shell
npm run start
```

エントリーファイルは index.ts。

## テスト

```shell
npm run test
```
