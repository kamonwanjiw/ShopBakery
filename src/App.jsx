import React, { useState } from "react";

const App = () => {
  const [balance, setBalance] = useState(2000);
  const [amount, setAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const withdraw = (amount) => {
    if (amount > balance) {
      alert("ยอดเงินไม่เพียงพอ");
      setAmount(0);
      return;
    }
    // จำนวนเงินที่ถอนต้องอยู่ระหว่าง 100 - 20000  pipe ||
    if (amount < 100 || amount > 20000) {
      alert("ยอดถอนต้องอยู่ระหว่าง 100 - 20000 บาท");
      setAmount(0);
      return;
    }
    //
    if (amount % 100 !== 0) {
      // หาร /
      alert("ยอดถอนต้องเป็นจำนวนเงินที่หารด้วย 100 ลงตัว");
      setAmount(0);
      return;
    }

    setBalance(balance - amount);
    setAmount(0);

    const transaction = {
      amount: amount,
      balance: balance-amount,
    };
    setHistory([...history, transaction]);
  };
  const handleChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };
  return (
    <div>
      <h1>โปรแกรมถอนเงิน</h1>
      <p>ยอดเงินคงเหลือ: {balance} บาท</p>
      <div>
        ยอดเงินที่ต้องการถอน:
        <input type="number" value={amount} onChange={handleChangeAmount} />
        <button onClick={() => withdraw(amount)}>ถอน</button>
      </div>
      <h3>ประวัติการถอนเงิน</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            ยอดถอน: {item.amount} บาท คงเหลือ {item.balance} บาท
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
