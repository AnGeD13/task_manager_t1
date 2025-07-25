import { T, Button } from "@admiral-ds/react-ui";
import styles from "./confirmModal.module.css";

interface IModal {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  isOpen,
  title, message,
  onConfirm, onCancel
}: IModal) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <T font="Main/M" as="h2" className={styles.title}>
          {title}
        </T>
        <T font="Body/Body 1 Long" as="p" className={styles.message}>
          {message}
        </T>
        <div className={styles.buttons}>
          <Button appearance="danger" dimension="s" onClick={onConfirm}>
            Удалить
          </Button>
          <Button appearance="secondary" dimension="s" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  )
}