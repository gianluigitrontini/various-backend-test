import { IsString } from "class-validator";

export class CreateTestDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

