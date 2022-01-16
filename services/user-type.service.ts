import { UserType } from '../entities/UserType'

// TO DO Figure out if this should be defined in a separate file
// How to import this data?
export const users: UserType[] = [
    { username: 'User1', email: 'user1@email.com', searchedForCount: 0, followerCount: 10, followingCount: 5 },
    { username: 'User2', email: 'user2@email.com', searchedForCount: 0, followerCount: 15, followingCount: 1 },
    { username: 'User3', email: 'user3@email.com', searchedForCount: 0, followerCount: 20, followingCount: 40 },
    { username: 'User4', email: 'user4@email.com', searchedForCount: 0, followerCount: 10, followingCount: 5 },
    { username: 'User5', email: 'user5@email.com', searchedForCount: 0, followerCount: 15, followingCount: 1 },
    { username: 'User6', email: 'user6@email.com', searchedForCount: 0, followerCount: 20, followingCount: 40 },
    { username: 'User7', email: 'user7@email.com', searchedForCount: 0, followerCount: 10, followingCount: 5 },
    { username: 'User8', email: 'user8@email.com', searchedForCount: 0, followerCount: 15, followingCount: 1 },
    { username: 'User9', email: 'user9@email.com', searchedForCount: 0, followerCount: 20, followingCount: 40 },
    { username: 'User10', email: 'user10@email.com', searchedForCount: 0, followerCount: 10, followingCount: 5 },
    { username: 'User11', email: 'user11@email.com', searchedForCount: 0, followerCount: 15, followingCount: 1 },
    { username: 'User12', email: 'user12@email.com', searchedForCount: 0, followerCount: 20, followingCount: 40 },
    { username: 'User13', email: 'user13@email.com', searchedForCount: 0, followerCount: 10, followingCount: 5 },
    { username: 'User14', email: 'user14@email.com', searchedForCount: 0, followerCount: 15, followingCount: 1 },
    { username: 'User15', email: 'user15@email.com', searchedForCount: 0, followerCount: 20, followingCount: 40 },
];

class UserTypeService {
    findByUsername(username: string): UserType {
        const user = users.find(user => user.username === username)
        if(user) {
            user.searchedForCount += 1;
            return user;
        }
        throw new Error(`User with username: ${username} does not exist.`);    
    }

    findMostSearchedUsers(limited: number): UserType[] {
        users.sort((firstUserObject, secondUserObject) => {
            return secondUserObject.searchedForCount - firstUserObject.searchedForCount;
        });
        return users.slice(0, limited); 
    }

    deleteSearchedForCount(username: string): number {
        const user = users.find(user => user.username === username)
        if(user) {
            const lastSearchedForCountValue = user.searchedForCount;
            user.searchedForCount = 0;
            return lastSearchedForCountValue;
        }
        throw new Error(`User with username: ${username} does not exist.`);  
    }
}

export default UserTypeService