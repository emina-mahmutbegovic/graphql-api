import { Resolver, Mutation, Arg, Query, Int } from 'type-graphql';
import { UserType } from '../entities/UserType';
import { LimitedInputType } from './types/limited-input.type';
import { Service } from "typedi";
import { UserTypeService } from '../services/user-type.service';

@Service()
@Resolver()
export class UserTypeResolver {

  constructor(private userTypeService: UserTypeService) { }

  @Query((_returns) => UserType, { nullable: false })
  async findByUsername(@Arg('username') username: string) {
    return this.userTypeService.findByUsername(username);
  }

  @Query(() => [UserType])
  async findMostSearchedUsers(@Arg('limitedInput') limitedInput: LimitedInputType) {
    return this.userTypeService.findMostSearchedUsers(limitedInput);
  }

  @Mutation(() => Int)
  async deleteSearchedForCount(@Arg('username') username: string) {
    return this.userTypeService.deleteSearchedForCount(username);
  }
}