# Apple App Store Server SDK for Nest.js 🍎

## Introduction 📖

This is a Nest.js SDK for Apple App Store Server API. It is based on [apple-app-store-api](https://github.com/apple/app-store-server-library-node).

It is a Nest.js module that can be easily integrated into Nest.js projects.

## Install 📦

`npm`、`yarn`、`pnpm` are all supported. Recommend `pnpm`.

```bash
pnpm add @nailyjs.nest.modules/app-store @apple/app-store-server-library
```

## Usage 📚

### Basic Usage 💼

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";

@Module({
  imports: [
    AppleAppStoreModule.register({
      // If true, the module can be used across all modules.
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

In your service, you can directly inject the `AppStoreServerAPIClient` instance.

```typescript
import { Injectable } from "@nestjs/common";
import { AppStoreServerAPIClient } from "@apple/app-store-server-library";

@Injectable()
export class AppStoreService {
  constructor(private readonly appStoreServerAPIClient: AppStoreServerAPIClient) {}

  // ...
}
```

> `AppStoreServerAPIClient` is imported from official package `@apple/app-store-server-library`.

### Async Usage 🚀

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";
import { Environment } from "@apple/app-store-server-library";

@Module({
  imports: [
    AppleAppStoreModule.registerAsync({
      // If true, the module can be used across all modules.
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

### Multiple Clients 🔗

Also can use multiple async clients. The following example shows how to use multiple general clients.

```typescript
import { Module } from "@nestjs/common";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";
import { Environment } from "@apple/app-store-server-library";

export const APP_STORE_SERVER_API_CLIENT_ONE = Symbol("APP_STORE_SERVER_API_CLIENT_ONE");
export const APP_STORE_SERVER_API_CLIENT_TWO = Symbol("APP_STORE_SERVER_API_CLIENT_TWO");

@Module({
  imports: [
    AppleAppStoreModule.register({
      // If true, the module can be used across all modules.
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

In your service, you can inject the exported `APP_STORE_SERVER_API_CLIENT_ONE` or `APP_STORE_SERVER_API_CLIENT_TWO` symbol.

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

## Author 👨‍💻

### Zero

- [GitHub](https://github.com/groupguanfang)
- [QQ](1203970284)

## Donate ☕️

If you find this project useful, you can buy author a glass of coffee 🥰

![wechat](https://github.com/nailyjs/nest-tencentcloud/blob/v1/screenshots/wechat.jpg?raw=true)
![alipay](https://github.com/nailyjs/nest-tencentcloud/blob/v1/screenshots/alipay.jpg?raw=true)
