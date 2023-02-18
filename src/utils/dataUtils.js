import data from "../data.json";

const getDataByApp = (appName) => {
  const obj = {};

  data.forEach((item) => {
    const dataInObj = obj[item.Date];
    const value = item["Daily Users"];

    if (item.App !== appName && appName) {
      return;
    }

    if (dataInObj === undefined) {
      obj[item.Date] = value;
    } else {
      obj[item.Date] += value;
    }
  });

  return obj;
};

const mapped = data.map((el) => el.App);
export const appNames = [...new Set(mapped)];
export const getDate = (str) => {
  const [day, month, year] = str.split("/");
  return new Date(+year, +month - 1, +day);
};

const getSorted = (obj) => {
  return Object.entries(obj).sort(
    ([date1], [date2]) => getDate(date1) - getDate(date2)
  );
};

const validateDate = (date, { min, max }) => {
  const isMinValid = !min || date >= min;
  const isMaxValid = !max || date <= max;
  return isMinValid && isMaxValid;
};

export const getData = ({ appName, dateFrom, dateTo }) => {
  const data = getDataByApp(appName);
  const sorted = getSorted(data);
  return sorted.filter(([date]) =>
    validateDate(date, { min: dateFrom, max: dateTo })
  );
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};

export const names = Object.keys(getDataByApp(""));
