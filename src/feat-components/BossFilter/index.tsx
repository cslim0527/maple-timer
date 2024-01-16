import { ChangeEvent, useState } from "react";
import { Boss } from "@/data";
import Button from "@/components/Button";

interface BossFilterProps {
  data: Boss[];
  handleCheck: (isChecked: boolean, bossName: string) => void;
}

const BossFilter = ({ data, handleCheck }: BossFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseFilter = () => {
    setIsOpen(false);
  };

  const handleOpenFilter = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <Button
        type="button"
        color="gray"
        style={{
          width: 100,
          borderRadius: "6px 0 0 6px",
          position: "fixed",
          top: 60,
          right: 0,
          zIndex: 9999,
        }}
        onClick={handleOpenFilter}
      >
        필터
      </Button>
    );
  }

  return (
    <div
      style={{ position: "fixed", top: 70, right: 40, zIndex: 9999 }}
      className="border bg-white rounded-lg shadow w-60 dark:bg-gray-700 p-4"
    >
      <p className="text-md font-semibold leading-normal text-gray-900 dark:text-white font-bold mb-2 flex justify-between">
        보스 필터
        <button type="button" onClick={handleCloseFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </p>

      <ul className="h-48 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
        {(data as Boss[]).map((boss, idx) => (
          <li key={`filter-item-${idx}`}>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id={`boss-input-${idx}`}
                type="checkbox"
                value=""
                defaultChecked={true}
                onChange={(e) => handleCheck(e.target.checked, boss.name)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`boss-input-${idx}`}
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 ml-1"
              >
                {boss.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BossFilter;
