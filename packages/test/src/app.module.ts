import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppleAppStoreModule } from "@nailyjs.nest.modules/app-store";
import { Environment } from "@apple/app-store-server-library";

@Module({
  imports: [
    AppleAppStoreModule.registerAsync({
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
  controllers: [AppController],
})
export class AppModule {}
