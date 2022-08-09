/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlarmNotification = /* GraphQL */ `
  query GetAlarmNotification($id: ID!) {
    getAlarmNotification(id: $id) {
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
export const listAlarmNotifications = /* GraphQL */ `
  query ListAlarmNotifications(
    $filter: ModelAlarmNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlarmNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timeLimit
        text
        link
        alertType
        alertTitle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
