import styles from "./filterSection.module.css";
import type { Dispatch, SetStateAction } from "react";
import { FilterTypeWithAll } from "../../../features/filter-with-all";

interface IFilters {
  setFilterCategory: Dispatch<SetStateAction<string>>;
  setFilterStatus: Dispatch<SetStateAction<string>>;
  setFilterPriority: Dispatch<SetStateAction<string>>;
}

export function FilterSection({  
  setFilterCategory,
  setFilterStatus,
  setFilterPriority
}: IFilters) {

  return (
    <section className={styles.main}>
      <FilterTypeWithAll
        type="category"
        setState={setFilterCategory}
      />
      <FilterTypeWithAll
        type="status"
        setState={setFilterStatus}
      />
      <FilterTypeWithAll
        type="priority"
        setState={setFilterPriority}
      />
    </section>
  )
}