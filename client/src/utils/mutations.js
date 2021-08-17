import {
  gql
} from '@apollo/client';

export const CREATE_APPOINTMENT = gql `
mutation createAppointment($date: String!, $time: Int!, $services:[Service], $pet: Pet) {
  createAppointment(date: $date, time: $time, services: $services, pet: $pet) {
    _id
    date
    time
    services
    pet {
      _id
      petName
      birthday
      petType
      breed
      gender
      weight
      owner {
        _id
        firstName
        lastName
        email
      }
    }
  }
}`;

export const CREATE_SERVICE = gql `
mutation createService($name: String!, $price: Int!, $description: String!) {
  createAppointment(name: $name, price: $price, description: $description) {
    _id
    name
    price
    description
  }
}`;
