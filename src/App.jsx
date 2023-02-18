import { Chart } from "./components/Chart.jsx";
import { Dropdown } from "./components/Dropdown.jsx";
import { useState } from "react";
import { getData, getDate } from "./utils/dataUtils.js";
import { DatePicker } from "./components/DatePicker.jsx";
import { Input, Container, Center } from "@chakra-ui/react";

export const App = () => {
  const [appName, setAppName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [target, setTarget] = useState("");

  const data = getData({ appName, dateFrom, dateTo });
  const dates = data.map(([date]) => getDate(date).getTime());
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Dropdown currentOption={appName} setCurrentOption={setAppName} />
      <DatePicker
        value={dateFrom}
        setValue={setDateFrom}
        minDate={minDate}
        maxDate={maxDate}
      />
      <DatePicker
        value={dateTo}
        setValue={setDateTo}
        minDate={minDate}
        maxDate={maxDate}
      />
      <Input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="max-w-md mx-auto max-w-md my-3"
      />
      {target}
      <Chart target={target} data={data} />
    </div>
  );
};
