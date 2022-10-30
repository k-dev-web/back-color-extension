import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
    ValidationPipe,
    UnprocessableEntityException
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {UsersService} from "./modules/users/users.service";

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            return await super.transform(value, metadata);
        } catch (e) {
            if (e instanceof BadRequestException) {
                throw new UnprocessableEntityException(this.handleError(e.message));
            }
        }
    }

    private handleError(errors) {
        return errors.map(error => error.constraints);
    }

}
@Injectable()
export class DoesUserExist implements CanActivate {
    constructor(private userService: UsersService) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const userExist = await this.userService.findOne(request.body.login);
        if (userExist) {
            throw new ForbiddenException('This login already exist');
        }
        return true;
    }
}
