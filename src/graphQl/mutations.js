import { gql } from "@apollo/client";

export const INSERT_PROJECT = gql`
  mutation InsertProject($object: projects_insert_input!) {
    insert_projects_one(object: $object) {
      id
      name
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: Int!, $object: projects_set_input!) {
    update_projects_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
      name
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
