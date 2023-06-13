import { gql } from "@apollo/client";

export const INSERT_PROJECT = gql`
  mutation InsertProject($object: projects_insert_input!) {
    insert_projects_one(object: $object) {
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
      category_id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: Int!, $object: projects_set_input!) {
    update_projects_by_pk(pk_columns: { id: $id }, _set: $object) {
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

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: Int!) {
    delete_projects_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_BACKER = gql`
  mutation InsertBacker($object: backers_insert_input!) {
    insert_backers_one(object: $object) {
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

export const UPDATE_BACKER = gql`
  mutation UpdateBacker($id: Int!, $object: backers_set_input!) {
    update_backers_by_pk(pk_columns: { id: $id }, _set: $object) {
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

export const DELETE_BACKER = gql`
  mutation DeleteBacker($id: Int!) {
    delete_backers_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_CATEGORY = gql`
  mutation InsertCategory($object: categories_insert_input!) {
    insert_categories_one(object: $object) {
      id
      project_category_id
      project_category_title
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: Int!, $object: categories_set_input!) {
    update_categories_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
      project_category_id
      project_category_title
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: Int!) {
    delete_categories_by_pk(id: $id) {
      id
    }
  }
`;
