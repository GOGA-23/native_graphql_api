const { gql } = require("apollo-server");

module.exports = gql`
  type JobData {
    id: String
    companyType: String
    img: String
    jobDesc: [String]
    location: String
    title: String
  }

  type Query {
    getJob(ID: ID!): JobData
    getAllJobs: [JobData]
  }
`;
