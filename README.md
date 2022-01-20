# GraphQL API 

### About
This is a simple API that consists of three GraphQL endpoints, which are converted from:
```
ROUTE: GET /users/{username}
RETURNS: {
            username: string # User's username
            email: string    # User's email
            searchedForCount: number # *Amount of /users route invocations
            followerCount: number # Number of followers the user has
            followingCount: number # Number of users the users follow
        }

ROUTE: GET /users/mostSearched?limit=10
PARAMS: limit: number – amount of users to return (required)
RETURNS list of {
            username: string # User's 
            usernameemail: string  # User's email
            searchedForCount: number # *Amount of /users route invocations
            followerCount: number # Number of followers the user has
            followingCount: number # Number of users the users follow
        }

ROUTE: DELETE /searchedForCount
RETURNS: number  
```
Unfortunately, it does not consume GitHub REST API because the creator of this code did not understand the task well. :) It uses 
an array of predefined user objects. Usernames are in range from ;'User1' to 'User15'. 

### References
* [TypeGraphQL](https://typegraphql.com/)
* [TypeGoose](https://typegoose.github.io/typegoose/)

### Requirements
 - node, npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Running the application
 - Use [npm install] to install dependencies
 - Use [npm run dev] to run the application

### Note
Application uses port 4000, so make sure it's free, or change the port number in 
config -> config.ts.

---

### API

## Queries & mutations

### findByUsername // Can be used to get user object.
@Params
username: string -> name of the user

Query
```
query {
  findByUsername(username: "User1"){
    username,
    email,
    searchedForCount,
    followerCount,
    followingCount
  }
}
```

Response
```
{
  "data": {
    "findByUsername": {
      "username": "User1",
      "email": "user1@email.com",
      "searchedForCount": 1,
      "followerCount": 10,
      "followingCount": 5
    }
  }
}
```

### findMostSearchedUsers // Used to find most searched users. Returns the list of %limited% most searched users.
@Params
limited: LimitedInput -> number of most searched users

Query
```
query($input: LimitedInputType!){
  findMostSearchedUsers(limitedInput: $input) {
    username
    email
    searchedForCount
    followerCount
    followingCount
  }
}
```
Input
```
{
  "input": { 
    "limited": 4
  }
}
```

### deleteSearchedForCount // Used to reset searched for counter for a specific user. Returnes searched for count for the user, after the reset. 
@Params
username: string

Query
```
mutation {
  deleteSearchedForCount(username: "User1")
}
```