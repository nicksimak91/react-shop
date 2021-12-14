import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const { setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        setGoods(data.featured);
      });
  });

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
