import { gql } from "@apollo/client";

export const PROJECTS_SUBSCRIPTION = gql`
  subscription MySubscription {
    projects(order_by: { created_at: desc }) {
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
