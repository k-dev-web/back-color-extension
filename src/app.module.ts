import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./database/database.module";
import {UsersModule} from "./modules/users/users.module";
import {AuthModule} from "./modules/auth/auth.module";
import {ColorsModule} from "./modules/colors/colors.module";


@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        UsersModule,
        AuthModule,
        ColorsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
