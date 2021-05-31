// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Node, Edge, Blog, Post, Comment } = initSchema(schema);

export {
  Node,
  Edge,
  Blog,
  Post,
  Comment
};