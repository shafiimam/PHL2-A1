# Combining Union and Intersection Types in TypeScript

## Introduction

Union (`|`) and intersection (`&`) types solve different problems, and combining them is useful when a value has one of several forms that share common data. A union says “either this type or that type.” An intersection combines requirements, saying “this type must satisfy both.” Together, they can model real-world variants without losing shared fields.

## A Practical Example

Imagine we have an application that sends notifications through email or SMS. Both kinds have an identifier and message, but each channel needs its own destination:

```ts
type NotificationBase = {
  id: string;
  message: string;
};

type EmailDetails = {
  kind: "email";
  emailAddress: string;
};

type SmsDetails = {
  kind: "sms";
  phoneNumber: string;
};

type Notification =
  NotificationBase & (EmailDetails | SmsDetails);
```

The intersection (`&`) adds the shared `NotificationBase` fields to the channel-specific alternatives. The union (`|`) allows either an email notification or an SMS notification. The `kind` field acts as a discriminant, helping TypeScript narrow the variant:

```ts
function describe(notification: Notification): string {
  if (notification.kind === "email") {
    return `Email to ${notification.emailAddress}: ${notification.message}`;
  }
  return `Text to ${notification.phoneNumber}: ${notification.message}`;
}
```

Each notification must contain `id` and `message`, plus exactly the fields required by its channel. The function can safely access the matching destination after checking `kind`.

## Conclusion

Use unions to represent alternatives and intersections to combine shared requirements with those alternatives. This pattern creates expressive, type-safe models for varied data while keeping common properties consistent.