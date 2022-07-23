import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPost {
    posts {
      title
      content {
        text
      }
      id
      tags
      createdAt
      date
    }
  }
`;

export { GET_POSTS };
