import { Resolver, Mutation, Arg, Query, Int } from 'type-graphql';
import { UserType } from '../entities/UserType';
import UserTypeService from '../services/user-type.service';

@Resolver()
export class UserTypeResolver {

  constructor(private userTypeService: UserTypeService) {
    this.userTypeService = new UserTypeService();
   }

  @Query((_returns) => UserType, { nullable: false })
  async findByUsername(@Arg('username') username: string) {
    return this.userTypeService.findByUsername(username);
  }

  @Query(() => [UserType])
  async findMostSearchedUsers(@Arg('limited', {  }) limited: number) {
    return this.userTypeService.findMostSearchedUsers(limited);
  }

  @Mutation((_returns) => Int)
  async deleteSearchedForCount(@Arg('username') username: string) {
    return this.userTypeService.deleteSearchedForCount(username);
  }
}