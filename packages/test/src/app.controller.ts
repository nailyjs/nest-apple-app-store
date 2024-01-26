import { AppStoreServerAPIClient } from "@apple/app-store-server-library";
import { Controller, Get, Inject } from "@nestjs/common";
import { APP_STORE_SERVER_API_CLIENT } from "./constants";

@Controller()
export class AppController {
  constructor(
    @Inject(APP_STORE_SERVER_API_CLIENT)
    private readonly appStoreClient: AppStoreServerAPIClient,
  ) {
    console.log(appStoreClient);
  }

  @Get()
  getHello() {
    return "Hello World!";
  }
}
