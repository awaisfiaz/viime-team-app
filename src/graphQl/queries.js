// import { gql } from "@apollo/client";

// export const PROJECT_QUERY = gql`
//   query Project($id: ID!) {
//     projects(id: $id) {
//       name
//       email
//       title
//       description
//       faqs
//       updates
//       subtitles
//       aime_ventures_backing
//       project_category
//       launch_date
//       project_start_date
//       project_end_date
//       project_image
//       project_video
//       subscriptions_available
//       subscriptions_secured
//       subscriptions_remaining
//       total_raised
//       total_remaining
//       aime_invested_total
//     }
//   }
// `;

import { gql } from "@apollo/client";

export const PROJECT_QUERY = gql`
  query GetProject($id: Int!) {
    projects_by_pk(id: $id) {
      id
      name
      email
      title
      description
      faqs
      updates
      subtitles
      aime_ventures_backing
      project_category
      launch_date
      project_start_date
      project_end_date
      project_image
      project_video
      subscriptions_available
      subscriptions_secured
      subscriptions_remaining
      total_raised
      total_remaining
      aime_invested_total
    }
  }
`;
