import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
    @PrimaryKey()
    id: number;

    @Property()
    createdAt: Date = new Date();

    @Property()
    name: string;

    @Property()
    email: string;

    @ManyToMany(() => User)
    friends = new Collection<User>(this);

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}