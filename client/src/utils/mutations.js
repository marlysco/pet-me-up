import {
  gql
} from '@apollo/client';

export const CREATE_APPOINTMENT = gql `
mutation createAppointment($input: AppointmentInput!) {
  createAppointment(input: $input) {
    _id
  }
}`;

export const DELETE_APPOINTMENT = gql `
mutation deleteAppointment($appointmentID: ID!) {
  deleteAppointment(appointmentID: $appointmentID) {
    _id
  }
}`;

export const CREATE_SERVICE = gql `
mutation createService($name: String!, $price: Int!, $description: String!) {
  createService(name: $name, price: $price, description: $description) {
    _id
    name
    price
    description
  }
}`;

export const DELETE_SERVICE = gql `
mutation deleteService($serviceID: ID!) {
  deleteService(serviceID: $serviceID) {
    _id
    name
    price
    description
  }
}`;

export const APPOINTMENT_CHECKOUT = gql `
mutation checkOut($appointmentID: ID!) {
  checkOut(appointmentID: $appointmentID)
}`;
