import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
  const { alertName = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{alertName} Добавлен в корзину</div>
    </div>
  );
}

export { Alert };
