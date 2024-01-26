import { AppStoreServerAPIClient } from "@apple/app-store-server-library";
import { DynamicModule, FactoryProvider, Module } from "@nestjs/common";
import { AppleAppStoreModuleAsyncOptions, AppleAppStoreModuleOptions } from "./types";
import { CustomAppStoreService } from "./custom.service";

@Module({})
export class AppleAppStoreModule {
  /**
   * Creates an instance of AppleAppStoreModule.
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @static
   * @param {AppleAppStoreModuleOptions} options The options to use when creating the module
   * @return {DynamicModule}
   * @memberof AppleAppStoreModule
   */
  public static register(options: AppleAppStoreModuleOptions): DynamicModule {
    if (!Array.isArray(options.clients)) {
      options.clients = [
        {
          provide: AppStoreServerAPIClient,
          ...options.clients,
        },
      ];
    }

    const providers: FactoryProvider[] = [];

    for (const option of options.clients) {
      providers.push({
        provide: option.provide || AppStoreServerAPIClient,
        useFactory() {
          return new AppStoreServerAPIClient(option.signingKey, option.keyId, option.issuerId, option.bundleId, option.environment);
        },
      });
    }

    return {
      module: AppleAppStoreModule,
      global: typeof options.global === "boolean" ? options.global : false,
      providers: [...providers],
      exports: [...providers],
    };
  }

  /**
   * Creates an async instance of AppleAppStoreModule.
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @static
   * @param {AppleAppStoreModuleAsyncOptions} options The options to use when creating the module
   * @return {DynamicModule}
   * @memberof AppleAppStoreModule
   */
  public static registerAsync(options: AppleAppStoreModuleAsyncOptions): DynamicModule {
    if (!Array.isArray(options.clients)) {
      options.clients = [
        {
          provide: AppStoreServerAPIClient,
          ...options.clients,
        },
      ];
    }

    const providers: FactoryProvider[] = [];
    for (const option of options.clients) {
      providers.push({
        provide: option.provide || AppStoreServerAPIClient,
        useFactory: option.useFactory,
        inject: option.inject || [],
      });
    }

    return {
      module: AppleAppStoreModule,
      global: typeof options.global === "boolean" ? options.global : false,
      providers: [...providers],
      exports: [...providers],
    };
  }

  /**
   * Creates an instance of AppleAppStoreModule for custom service.Not recommended use this,
   * because it means that you only use the AppStoreServerAPIClient class.
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @static
   * @return {*}  {DynamicModule}
   * @memberof AppleAppStoreModule
   */
  public static forCustomService(): DynamicModule {
    return {
      module: AppleAppStoreModule,
      global: true,
      providers: [CustomAppStoreService],
      exports: [CustomAppStoreService],
    };
  }
}
