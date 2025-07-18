import { useState } from "react";
import { Select, Option, T } from "@admiral-ds/react-ui";
import { filtersData, labelForType, type TLabel } from "../../../entities/filters";
import type { ITask } from "../../../entities/task";
import styles from "./filterType.module.css";


interface IFilter {
  type: TLabel;
  value: string;
  changeTask: <T extends keyof ITask>(field: T, value: ITask[T]) => void;
}

export function FilterType({type, value, changeTask}: IFilter) {
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