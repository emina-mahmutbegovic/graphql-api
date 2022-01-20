import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The User Type model' })
export class UserType {

  @Field()
  @Property()
  username: string;

  @Field()
  @Property()
  email: string;
  
  @Field()
  @Property()
  searchedForCount: number;
  
  @Field()
  @Property()
  followerCount: number;
  
  @Field()
  @Property()
  followingCount: number;  
}