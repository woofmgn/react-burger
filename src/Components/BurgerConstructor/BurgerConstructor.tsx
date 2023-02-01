import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

export const BurgerConstructor = () => {
  const img = "https://code.s3.yandex.net/react/code/sauce-04.png";

  return (
    <section className={styles.section}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className="ml-4"
      >
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
          <li className={styles.item}>
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </li>
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
      </div>
      <div
        className="mt-10"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <p
          className="text text_type_digits-medium mr-10"
          style={{ display: "flex", gap: "8px" }}
        >
          {"20"}
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
