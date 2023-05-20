import * as Notifications from "expo-notifications";
import moment from "moment";

const NotificationsEvent = async ({ week, items }) => {
  const { unity, room, notify, hour } = items;

  // Init
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      vibrationPattern: [0, 250, 250, 250],
    }),
  });

  const body = {
    week,
    message: `Atenção! A sua aula iniciará em ${notify} minutos na unidade ${unity} e sala ${room}.`,
  };

  // Retiramos os minutos que antecedem o horário da aula conforme
  // informado pelo o usuário
  const forSubtract = `00:${notify}:00`;
  const currentDate = `${moment().format("YYYY-MM-DD")} ${hour}:00`; // YYYY-MM-DD HH:mm:ss
  const dateSchedule = moment(currentDate).subtract(forSubtract);
  const onlyHour = dateSchedule.format("HH:mm").toString();

  const formattedHour = onlyHour.split(":")[0];
  const formattedMinute = onlyHour.split(":")[1];

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "LEMBRE-FAS!",
      body: body.message,
    },
    trigger: {
      hour: parseInt(formattedHour),
      minute: parseInt(formattedMinute),
      repeats: true,
      weekday: parseInt(week),
    },
  });
};

export default NotificationsEvent;
