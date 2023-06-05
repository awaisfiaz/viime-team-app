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

export const BACKER_QUERY = gql`
  query GetBacker($id: Int!) {
    backers_by_pk(id: $id) {
      id
      order_number
      member_name
      project_name
      status
      status_2
      pledge_money
      backers_description
      estimated_delivery_date
    }
  }
`;

export const CATEGORY_QUERY = gql`
  query GetCategory($id: Int!) {
    categories_by_pk(id: $id) {
      id
      project_category_id
      project_category_title
    }
  }
`;
