import { Select, Option, T } from "@admiral-ds/react-ui";
import styles from "./detailedFilterType.module.css";
import { type TaskProps } from "../../../data/taskType";
import { useState } from "react";
import { filtersData, labelForType, type labelType } from "../../../data/filterTypes";


interface DetailedFilterTypeProps {
  type: labelType;
  value: string;
  changeTask: <T extends keyof TaskProps>(field: T, value: TaskProps[T]) => void;
}

export default function DetailedFilterType({type, value, changeTask}: DetailedFilterTypeProps) {
  const typesArray = filtersData[type];
  const [typeValue, setTypeValue] = useState<string>(value);

  const handleChangeType = (newType: string) => {
    changeTask(type, newType);
    setTypeValue(newType);
  };

  return (
    <section className={styles.selectWrapper}>
      <label htmlFor={type} className={styles.labelForType}><T font="Main/S" as="p">{labelForType[type]}:</T></label>
      <Select
        className={styles.filter}
        id={type}
        value={typeValue}
        onChange={event => handleChangeType(event.target.value)}
      >
        {
          typesArray.map((type) => (
            <Option key={type} value={type}>{type}</Option>
          ))
        }
      </Select>
    </section>
  )
}