import { formatDate } from "../utils/dataUtils.js";

export const DatePicker = ({ value, setValue, minDate, maxDate }) => {
  return (
    <div>
      <input
        type="date"
        value={value}
        min={formatDate(minDate)}
        max={formatDate(maxDate)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
