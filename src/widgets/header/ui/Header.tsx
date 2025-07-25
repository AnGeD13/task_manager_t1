import { Button } from "@admiral-ds/react-ui";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleCreateTask = () => {
    navigate("/task/new");
  };

  return (
    <header className={styles.header}>
        <Button 
          appearance="success" 
          dimension="m"
          type="button"
          onClick={handleCreateTask}
        >Создать</Button>
    </header>
  )
}