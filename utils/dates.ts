import dayjs from "dayjs";
import es from "dayjs/locale/es";

dayjs.locale({
  ...es,
});

export { dayjs };
