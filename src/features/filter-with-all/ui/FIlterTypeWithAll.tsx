import { useState, type Dispatch, type SetStateAction } from "react";
import { Select, T, Option } from "@admiral-ds/react-ui";
import { filtersDataWithAll, labelForType, type TLabel } from "../../../entities/filters";
import styles from "./filterTypeWithAll.module.css";


interface IFilter {
  type: TLabel;
  setState: Dispatch<SetStateAction<string>>;
}

export function FilterTypeWithAll({
  type, setState
}: IFilter) {
  const typesArray = filtersDataWithAll[type];
  const [typeValue, setTypeValue] = useState<string>(typesArray[0]);

  const handleChangeType = (handleType: string) => {
    setTypeValue(handleType);
    setState(handleType);
  };

  return (
    <section>
      <label htmlFor={type}><T font="Additional/L" as="p">{labelForType[type]}:</T></label>
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