import { v4 as uuidv4 } from 'uuid';

export class Users { 
    id;
    username;
    password;
    createdAt;
    updatedAt;

    static createEntity = (user) => {
        const newUser = new Users();

        newUser.id = user.id ?? uuidv4();
        newUser.username = user.username;
        newUser.password = user.password;
        newUser.createdAt = new Date();
        newUser.updatedAt = new Date();
        
        return newUser;
    }
}