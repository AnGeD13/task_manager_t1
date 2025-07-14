import { Select, T, Option } from "@admiral-ds/react-ui";
import styles from "./filterType.module.css";
import { useState, type Dispatch, type SetStateAction } from "react";
import { filtersDataWithAll, labelForType, type labelType } from "../../../data/filterTypes";

interface FilterTypeProps {
  type: labelType;
  setState: Dispatch<SetStateAction<string>>;
}

export default function FilterType({
  type, setState
}: FilterTypeProps) {
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