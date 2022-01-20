import { Constants } from '../data/constants';
import { UserType } from '../entities/UserType'
import { LimitedInputType } from '../resolvers/types/limited-input.type';
import { Service } from "typedi";

@Service()
export class UserTypeService {
    findByUsername(username: string): UserType {
        const user = Constants.users.find(user => user.username === username)
        if(user) {
            user.searchedForCount += 1;
            return user;
        }
        throw new Error(`User with username: ${username} does not exist.`);    
    }

    findMostSearchedUsers(limitedInput: LimitedInputType): UserType[] {
        Constants.users.sort((firstUserObject, secondUserObject) => {
            return secondUserObject.searchedForCount - firstUserObject.searchedForCount;
        });
        return Constants.users.slice(0, limitedInput.limited); 
    }

    deleteSearchedForCount(username: string): number {
        const user = Constants.users.find(user => user.username === username)
        if(user) {
            user.searchedForCount = 0;
            return user.searchedForCount;
        }
        throw new Error(`User with username: ${username} does not exist.`);  
    }
}