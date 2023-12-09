import { Button } from "antd";

export const DEFAULT_MODAL_BTN = {
  add: (cb) => (
    <Button onClick={() => cb()} htmlType="submit" type="primary">
      Добавить запись
    </Button>
  ),
  edit: (cb) => (
    <Button onClick={() => cb()} htmlType="submit" type="primary">
      Сохранить
    </Button>
  ),
  cancel: (cb) => (
    <Button onClick={() => cb()} ghost type="primary">
      Отмена
    </Button>
  ),
  ok: (cb) => (
    <Button onClick={() => cb()} type="primary">
      Ок
    </Button>
  ),
};
