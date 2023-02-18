import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = ({ data, target }) => {
  return (
    <div>
      <LineChart width={1000} height={300} data={data}>
        <XAxis dataKey="0" />
        <YAxis />
        <ReferenceLine
          y={target}
          label="Max"
          stroke={data.at(-1)[1] > target ? "green" : "red"}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="1" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
