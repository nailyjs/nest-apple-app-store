import {
  AppleAppStoreModuleMultipleAsyncOptions,
  AppleAppStoreModuleMultipleOptions,
  AppleAppStoreModuleSingletonAsyncOptions,
  AppleAppStoreModuleSingletonOptions,
} from "./options.interface";

export interface AppleAppStoreModuleOptions {
  /**
   * If true, the AppStoreServerAPIClient can be injected from anywhere in your application
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {boolean}
   * @memberof AppleAppStoreModuleOptions
   */
  global?: boolean;
  /**
   * The client options to use when creating the module
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @see https://github.com/apple/app-store-server-library-node
   * @type {(AppleAppStoreModuleSingletonOptions | AppleAppStoreModuleMultipleOptions[])}
   * @memberof AppleAppStoreModuleOptions
   */
  clients: AppleAppStoreModuleSingletonOptions | AppleAppStoreModuleMultipleOptions[];
}

export interface AppleAppStoreModuleAsyncOptions {
  /**
   * If true, the AppStoreServerAPIClient can be injected from anywhere in your application
   * @default false
   */
  global?: boolean;
  /**
   * The client options to use when creating the module
   */
  clients: AppleAppStoreModuleSingletonAsyncOptions | AppleAppStoreModuleMultipleAsyncOptions[];
}
