import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The User Type model' })
export class UserType {

  // TO DO Determine if type should be string or String
  @Field()
  @Property()
  username: String;

  @Field()
  @Property()
  email: String;
  
  @Field()
  @Property()
  searchedForCount: number;
  
  @Field()
  @Property()
  followerCount: number;
  
  @Field()
  @Property()
  followingCount: number  
}