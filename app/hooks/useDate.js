import Moment from "moment/min/moment-with-locales";
import { NativeModules, Platform } from "react-native";

export default useDate = () => {
  const locale =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  const formatDate = (date) => {
    Moment.locale(locale);
    return Moment(date).format("LL").toString();
  };

  const getToday = () => {
    return formatDate(Moment());
  };
  const getLastDayWeek = () => {
    return formatDate(Moment().locale(locale).endOf("week"));
  };

  return { formatDate, getToday, getLastDayWeek };
};
