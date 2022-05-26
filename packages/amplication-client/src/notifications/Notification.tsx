import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

function Notification() {
  return (
    <NovuProvider
      subscriberId={"USER_ID"}
      applicationIdentifier={"qBrB-jRV8iOp"}
    >
      <PopoverNotificationCenter>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}

export default Notification;
