import { gql } from "@apollo/client";

export const PROJECTS_SUBSCRIPTION = gql`
  subscription MySubscription {
    projects(order_by: { created_at: desc }) {
      id
      title
      description
    }
  }
`;

export const BACKERS_SUBSCRIPTION = gql`
  subscription MySubscription {
    backers(order_by: { created_at: desc }) {
      id
      order_number
      member_name
      project_name
      status
      pledge_money
      backers_description
      estimated_delivery_date
    }
  }
`;

export const CATEGORIES_SUBSCRIPTION = gql`
  subscription MySubscription {
    categories(order_by: { created_at: desc }) {
      id
      project_category_id
      project_category_title
    }
  }
`;
