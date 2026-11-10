import type { NotificationResponse } from "expo-notifications";

import {
  isSfmcAndroidNotificationResponse,
  isSfmcIosNotificationResponse,
  isSfmcNotificationResponse,
} from "../isSfmcNotificationResponse";

const createResponse = (senderId: string): NotificationResponse => {
  const payload = { _sid: senderId };
  return {
    actionIdentifier: "default",
    notification: {
      date: 0,
      request: {
        identifier: "notification",
        content: {
          title: null,
          subtitle: null,
          body: null,
          data: { payload },
          categoryIdentifier: null,
          sound: null,
          threadIdentifier: null,
        },
        trigger: { type: "push", payload },
      },
    },
  };
};

it.each([
  ["SFMC", true],
  ["other", false],
])(
  "recognizes Salesforce notification responses for %s",
  (senderId, expected) => {
    const response = createResponse(senderId);
    expect(isSfmcAndroidNotificationResponse(response)).toBe(expected);
    expect(isSfmcIosNotificationResponse(response)).toBe(expected);
    expect(isSfmcNotificationResponse(response)).toBe(expected);
  },
);
