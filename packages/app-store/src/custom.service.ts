import { Injectable } from "@nestjs/common";
import { AppleAppStoreModuleSingletonOptions } from "./types";
import { AppStoreServerAPIClient } from "@apple/app-store-server-library";

@Injectable()
export class CustomAppStoreService {
  public createClient(options: AppleAppStoreModuleSingletonOptions) {
    return new AppStoreServerAPIClient(options.signingKey, options.keyId, options.issuerId, options.bundleId, options.environment);
  }
}
