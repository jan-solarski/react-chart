import { Select } from "@chakra-ui/react";
import { appNames } from "../utils/dataUtils.js";
import { useState } from "react";

export const Dropdown = ({ currentOption, setCurrentOption }) => {
  return (
    <div className="flex flex-col align-center justify-center mb-3">
      <Select
        placeholder="Select game"
        value={currentOption}
        onChange={(e) => setCurrentOption(e.target.value)}
        className="max-w-md mx-auto max-w-md"
      >
        {appNames.map((appName) => (
          <option key={appName} value={appName}>
            {appName}
          </option>
        ))}
      </Select>
    </div>
  );
};
