import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';
import { User } from 'src/user/entities/user';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

// /**
//  * Validation tramite Joi
//  */
// const CreateUserSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
// })

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUsers(): Promise<any> {
        return await this.userService.getUsers();
    }

    @Post()
    createUsers(@Body() body: CreateUserDto): Promise<User> {
        return this.userService.createUser({ name: body.name, email: body.email });
    }
}
