import { useState, type Dispatch, type SetStateAction } from "react";
import { Select, Option, T } from "@admiral-ds/react-ui";
import { ALL_TYPES, getTypes, getTypesWithAll, labelForType, taskTypes, type ITask, type TaskTypeKey } from "@entities/task";
import styles from "./filterType.module.css";
import { RequiredField } from "@shared/required-field";


interface IFilter {
  type: TaskTypeKey;
  value?: string;
  changeTask?: <T extends keyof ITask>(field: T, value: ITask[T]) => void;
  setState?: Dispatch<SetStateAction<string>>;
}


/**
 * Компонент для выбора значения фильтра по типу задачи, 
 * состоящий из selector и label
 * 
 * @param {TaskTypeKey} type - тип фильтра: "priority" | "status" | "category"
 * @param {string} value - Необязательное значение, передается в selector.
 *  Если значение не передается, то selector принимает значение "Все" по умполчанию.
 *  "Все" используется при фильтрации списка задач;
 *  Переданное значение используется в конкретной задаче; 
 *  "" - при создании новой задачи.
 * 
 * @param changeTask - параметр передается при необходимости изменить/задать тип для конкретной задачи.
 * @param setState - передается в случае фильтрации списка задач.
 */
export function FilterType({type, value, changeTask, setState}: IFilter) {
  const curValue = value === undefined ? ALL_TYPES : value;
  const typesArray = curValue === ALL_TYPES ? getTypesWithAll(taskTypes[type]) : getTypes(taskTypes[type]);
  const [typeValue, setTypeValue] = useState<string>(curValue);

  const handleChangeType = (newType: string) => {
    setTypeValue(newType);
    if (setState) {
      setState(newType);
    } else if (changeTask) {
      changeTask(type, newType);
    }
  };

  return (
    <section className={`${curValue === ALL_TYPES ? "" : styles.selectWrapper}`}>
      <label htmlFor={type} className={`${curValue === ALL_TYPES ? "" : styles.labelForType}`}>
        <T font={`${curValue === ALL_TYPES ? "Additional/L" : "Main/S"}`} as="p">
          {labelForType[type]}:{curValue !== ALL_TYPES && <RequiredField/>}
        </T>
      </label>
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