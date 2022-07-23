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
      blogContent
      date
    }
  }
`;

export { GET_POSTS };
