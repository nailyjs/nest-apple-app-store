# Apple App Store For Nest.js 服务端 SDK 🍎

中文 | [English](./README.md)

## 简介 📖

这是一个用于 Apple App Store 服务器 API 的 Nest.js SDK，基于 [apple-app-store-api](https://github.com/apple/app-store-server-library-node) 二次封装，可以轻松集成到 Nest.js 项目中的 Nest.js 模块。

## 安装 📦

支持 `npm`、`yarn`、`pnpm`。推荐使用 `pnpm`。

```bash
pnpm add @nailyjs.nest.modules/app-store @apple/app-store-server-library
```

## 使用方法 📚

### 基本用法 💼

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";

@Module({
  imports: [
    AppleAppStoreModule.register({
      // 如果为 true，则本模块附带的服务可在所有模块中使用。
      global: true,
      clients: {
        provide: APP_STORE_SERVER_API_CLIENT,
        signingKey: "",
        issuerId: "",
        bundleId: "",
        keyId: "",
        environment: Environment.SANDBOX,
      },
    }),
  ],
})
export class AppModule {}
```

在您的service中可以直接注入 `AppStoreServerAPIClient` 实例。

```typescript
import { Injectable } from "@nestjs/common";
import { AppStoreServerAPIClient } from "@apple/app-store-server-library";

@Injectable()
export class AppStoreService {
  constructor(private readonly appStoreServerAPIClient: AppStoreServerAPIClient) {}

  // ...
}
```

> `AppStoreServerAPIClient` 是从官方包 `@apple/app-store-server-library` 中导入的。

### 异步用法 🚀

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";
import { Environment } from "@apple/app-store-server-library";

@Module({
  imports: [
    AppleAppStoreModule.registerAsync({
      // 如果为 true，则本模块附带的服务可在所有模块中使用。
      global: true,
      clients: {
        inject: [],
        useFactory: () => {
          return {
            signingKey: "",
            issuerId: "",
            bundleId: "",
            keyId: "",
            environment: Environment.SANDBOX,
          };
        },
      },
    }),
  ],
})
export class AppModule {}
```

### 多客户端 🔗

也可以使用多个异步客户端。以下示例显示了如何使用多个通用客户端。

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";
import { Environment } from "@apple/app-store-server-library";

export const APP_STORE_SERVER_API_CLIENT_ONE = Symbol("APP_STORE_SERVER_API_CLIENT_ONE");
export const APP_STORE_SERVER_API_CLIENT_TWO = Symbol("APP_STORE_SERVER_API_CLIENT_TWO");

@Module({
  imports: [
    AppleAppStoreModule.register({
      // 如果为 true，则本模块附带的服务可在所有模块中使用。
      global: true,
      clients: [
        {
          provide: APP_STORE_SERVER_API_CLIENT_ONE,
          signingKey: "",
          issuerId: "",
          bundleId: "",
          keyId: "",
          environment: Environment.SANDBOX,
        },
        {
          provide: APP_STORE_SERVER_API_CLIENT_TWO,
          signingKey: "",
          issuerId: "",
          bundleId: "",
          keyId: "",
          environment: Environment.PRODUCTION,
        },
      ],
    }),
  ],
})
export class AppModule {}
```

在您的服务中，您可以注入导出的 `APP_STORE_SERVER_API_CLIENT_ONE` 或 `APP_STORE_SERVER_API_CLIENT_TWO` 符号。

```typescript
import { Injectable } from "@nestjs/common";
import { AppStoreServerAPIClient } from "@apple/app-store-server-library";
import { APP_STORE_SERVER_API_CLIENT_ONE } from "./app.module";

@Injectable()
export class AppStoreService {
  constructor(
    @Inject(APP_STORE_SERVER_API_CLIENT_ONE)
    private readonly appStoreServerAPIClientOne: AppStoreServerAPIClient,
    @Inject(APP_STORE_SERVER_API_CLIENT_TWO)
    private readonly appStoreServerAPIClientTwo: AppStoreServerAPIClient,
  ) {}

  // ...
}
```

## 作者 👨‍💻

### Zero

- [GitHub](https://github.com/groupguanfang)
- [QQ](1203970284)

## 捐赠 ☕️

如果您觉得这个项目有用，您可以给作者买一杯咖啡 🥰

![wechat](./screenshots/wechat.jpg)
![alipay](./screenshots/alipay.jpg)
