import { gql } from "@apollo/client";

const NEW_POST = gql`
  mutation CreatePost($blogContent: String!, $title: String!) {
    createPost(data: { title: $title, blogContent: $blogContent }) {
      id
    }
  }
`;

const PUBLISH_POST = gql`
  mutation PublishPost($id: ID!) {
    publishPost(where: { id: $id }) {
      id
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(where: { id: $id }) {
      id
    }
  }
`;

export { NEW_POST, PUBLISH_POST, DELETE_POST };
