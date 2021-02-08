import gql from "graphql-tag";

const GET_MEMBERS = gql`
  query members {
    members {
      name
      phoneNumber
      email
      imgURL
    }
  }
`;

export default GET_MEMBERS;
