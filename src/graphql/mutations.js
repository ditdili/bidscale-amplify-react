/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlarmNotification = /* GraphQL */ `
  mutation CreateAlarmNotification(
    $input: CreateAlarmNotificationInput!
    $condition: ModelAlarmNotificationConditionInput
  ) {
    createAlarmNotification(input: $input, condition: $condition) {
      id
      timeLimit
      text
      link
      alertType
      alertTitle
      createdAt
      updatedAt
    }
  }
`
export const updateAlarmNotification = /* GraphQL */ `
  mutation UpdateAlarmNotification(
    $input: UpdateAlarmNotificationInput!
    $condition: ModelAlarmNotificationConditionInput
  ) {
    updateAlarmNotification(input: $input, condition: $condition) {
      id
      timeLimit
      text
      link
      alertType
      alertTitle
      createdAt
      updatedAt
    }
  }
`
export const deleteAlarmNotification = /* GraphQL */ `
  mutation DeleteAlarmNotification(
    $input: DeleteAlarmNotificationInput!
    $condition: ModelAlarmNotificationConditionInput
  ) {
    deleteAlarmNotification(input: $input, condition: $condition) {
      id
      timeLimit
      text
      link
      alertType
      alertTitle
      createdAt
      updatedAt
    }
  }
`
