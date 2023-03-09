// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

import { CURRENCY } from "./component/Balance";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 5000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 1000;
const WAGE_VALUE = 1789;
const COURSE_PRICE = 999;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);
    setPayment([
      {
        name: "Поповнення балансу",
        amount: GET_MONEY,
        type: "+"
      },
      ...payment
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE} ${CURRENCY}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setPayment] = React.useState([]);

  const getWage = () => {
    setBalance(balance + WAGE_VALUE);
    setPayment([
      {
        name: "Заробітна плата",
        amount: WAGE_VALUE,
        type: "+"
      },
      ...payment
    ]);
  };

  const getСourse = () => {
    setBalance(balance - COURSE_PRICE);
    setPayment([
      {
        name: "Оплата курсу",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const HelloWorld = () => alert("Hello world!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="MY MONOBANK :)" onClick={HelloWorld} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/money-green.svg"
          },
          {
            name: "Зарахувати зарплату",
            onClick: getWage,
            img: "/icon/get.svg"
          },
          {
            name: "Оплатити курс",
            onClick: getСourse,
            img: "/icon/payment.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
          
      */}
      <Payment payment={payment} />
    </Page>
  );
}
