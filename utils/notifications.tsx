import * as Notifications from "expo-notifications";

export const requestNotificationsPermissions = async () => {
  const settings = await Notifications.getPermissionsAsync();

  // const status = settings.granted;
  // return status;
};
