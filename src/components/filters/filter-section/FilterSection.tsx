import styles from "./filterSection.module.css";
import type { Dispatch, SetStateAction } from "react";
import FilterType from "../filter-type/FIlterType";

interface FiltersProps {
  setFilterCategory: Dispatch<SetStateAction<string>>;
  setFilterStatus: Dispatch<SetStateAction<string>>;
  setFilterPriority: Dispatch<SetStateAction<string>>;
}

export default function FilterSection({
  setFilterCategory,
  setFilterStatus,
  setFilterPriority
}: FiltersProps) {

  return (
    <section className={styles.main}>
      <FilterType
        type="category"
        setState={setFilterCategory}
      />
      <FilterType
        type="status"
        setState={setFilterStatus}
      />
      <FilterType
        type="priority"
        setState={setFilterPriority}
      />
    </section>
  )
}