import { InputType, Field } from 'type-graphql';

// TO DO Determine if this class is needed
// Figure out how to make limited parameter required
@InputType()
export class UserTypeInput {
  @Field()
  @require("true")
  limited: number;
}
