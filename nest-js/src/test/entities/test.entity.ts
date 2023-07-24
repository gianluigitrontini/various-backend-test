import { PrimaryKey, Property } from "@mikro-orm/core";

export class Test {
    @PrimaryKey()
    id: number;

    @Property()
    createdAt: Date = new Date();

    @Property()
    name: string;

    @Property()
    description: string;
}
