import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import User from '../../models/User';

interface ICreateUserSeed {
    name: string;
    email: string;
    password: string;
}

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        // var aux: User = { id: '', name: 'USER_01', email: 'USER_01@A.COM ', password: '123456', created_at: new Date(), updated_at: new Date() };

        const user = new User();
        user.name = 'name';
        user.email = 'email';
        user.password = 'password';
        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()
    }
}

export const Users = [
    { name: 'USER_01', email: 'USER_01@A.COM ', password: '123456' },
    { name: 'USER_02', email: 'USER_02@A.COM ', password: '123456' },
    { name: 'USER_03', email: 'USER_03@A.COM ', password: '123456' },
    { name: 'USER_04', email: 'USER_04@A.COM ', password: '123456' },
    { name: 'USER_05', email: 'USER_05@A.COM ', password: '123456' },
];