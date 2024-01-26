import { Environment } from "@apple/app-store-server-library";
import { InjectionToken } from "@nestjs/common";

/**
 * Create an App Store Server API client
 *
 * @param signingKey Your private key downloaded from App Store Connect
 * @param keyId Your private key ID from App Store Connect
 * @param issuerId Your issuer ID from the Keys page in App Store Connect
 * @param bundleId Your app’s bundle ID
 * @param environment The environment to target
 */
export interface AppleAppStoreModuleSingletonOptions {
  /**
   * Your private key downloaded from App Store Connect
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {string}
   * @memberof AppleAppStoreModuleOptions
   */
  signingKey: string;
  /**
   * Your private key ID from App Store Connect
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {string}
   * @memberof AppleAppStoreModuleOptions
   */
  keyId: string;
  /**
   * Your issuer ID from the Keys page in App Store Connect
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {string}
   * @memberof AppleAppStoreModuleOptions
   */
  issuerId: string;
  /**
   * Your app’s bundle ID
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {string}
   * @memberof AppleAppStoreModuleOptions
   */
  bundleId: string;
  /**
   * The environment to target
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {Environment}
   * @memberof AppleAppStoreModuleOptions
   */
  environment: Environment;
  /**
   * Whether the module should be global or not
   *
   * @author Zero <gczgroup@qq.com>
   * @date 2024/01/27
   * @type {boolean}
   * @memberof AppleAppStoreModuleSingletonOptions
   */
  global?: boolean;
}

export interface AppleAppStoreModuleMultipleOptions extends AppleAppStoreModuleSingletonOptions {
  provide: InjectionToken;
}

export interface AppleAppStoreModuleSingletonAsyncOptions {
  useFactory: (...args: any[]) => Promise<AppleAppStoreModuleSingletonOptions> | AppleAppStoreModuleSingletonOptions;
  inject?: any[];
  global?: boolean;
}

export interface AppleAppStoreModuleMultipleAsyncOptions extends AppleAppStoreModuleSingletonAsyncOptions {
  provide: InjectionToken;
}
