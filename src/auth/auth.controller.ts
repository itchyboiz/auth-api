import { Controller, Post } from "@nestjs/common";
import { Authservice } from "./auth.service";

@Controller('auth')
export class Authcontroller{
  
    constructor(private authservice: Authservice) {}

    @Post('signup')
    signup(){
        return 'iam pasok'
    }
@Post('signin')

signin(){
    return 'richie im in'
}
}
