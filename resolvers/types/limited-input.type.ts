import { InputType, Field } from 'type-graphql';

@InputType()
export class LimitedInputType {
  @Field()
  limited: number;
}