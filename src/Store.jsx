import React, { useState } from 'react';

const Store = () => {
  const products = [
        {id: 1, name: "คุกกี้นมข้นหวาน", price: 55},
        {id: 2, name: "ทาร์ตไข่", price: 40},
        {id: 3, name: "ทาร์ตบราวนี่", price: 60},
        {id: 4, name: "ทาร์ตผลไม้", price: 65},
        {id: 5, name: "ชีสเค้กมันม่วง", price: 70},
        {id: 6, name: "ชีสเค้กซูเฟล", price: 65},
        {id: 7, name: "วาฟเฟิลช็อกโกแลต", price: 70},
        {id: 8, name: "แพนเค้กกล้วยหอม", price: 65},
        {id: 9, name: "พุดดิ้งกล้วยเนยถั่ว", price: 70},
        {id: 10, name: "พิซซ่าบราวนี่", price: 65},
        {id: 11, name: "เครปเค้กชาไทย", price: 70},
        {id: 12, name: "ซูครีม", price: 45},
  ];

  const [selectedProduct, setSelectedProduct] = useState({ name: "", price: 0 });
  const [quantity, setQuantity] = useState(1);

  const total = selectedProduct.price * quantity;
  const discount = total >= 1000 ? 100 : 0; 
  const net = total - discount;

  const mainContainerStyle = {
    display: 'flex',
    gap: '40px',
    padding: '40px',
    fontFamily: 'Tahoma, sans-serif',
    alignItems: 'flex-start'
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 150px)',
    gap: '15px'
  };

  const productButtonStyle = {
    backgroundColor: '#e6f0ff',
    border: '1px solid #7a9cc6',
    borderRadius: '4px',
    padding: '20px 10px',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const calculatorStyle = {
    border: '1px solid #333',
    borderRadius: '30px',
    padding: '30px',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const inputRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px'
  };

  const labelBoxStyle = {
    border: '1px solid #333',
    padding: '5px',
    width: '80px',
    fontSize: '14px'
  };

  const displayBoxStyle = {
    backgroundColor: '#e5d1e8', 
    border: '1px solid #b194b5',
    padding: '8px 10px',
    flexGrow: 1,
    minHeight: '25px'
  };

  const greenBoxStyle = {
    backgroundColor: '#c8e6c9',
    border: '1px solid #81c784',
    padding: '8px 15px',
    width: '140px',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const qtyInputStyle = {
    backgroundColor: '#ffe5cc',
    border: '1px solid #ffb74d',
    padding: '8px',
    width: '60px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const circleBtnStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #333',
    background: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginLeft: '40px' }}>มอกกี้เบเกอรี่</h2>
      
      <div style={mainContainerStyle}>
        <div style={productGridStyle}>
          {products.map((p, index) => (
            <div 
              key={index} 
              style={productButtonStyle}
              onClick={() => {
                setSelectedProduct(p);
                setQuantity(1);
              }}
            >
              <div>{p.name}</div>
              <div>{p.price}</div>
            </div>
          ))}
        </div>

        <div style={calculatorStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={displayBoxStyle}>
              <span style={{ fontSize: '12px' }}>ชื่อสินค้า:</span> {selectedProduct.name}
            </div>
            <div style={displayBoxStyle}>
              <span style={{ fontSize: '12px' }}>ราคา:</span> {selectedProduct.price > 0 ? selectedProduct.price : ''}
            </div>
          </div>

          <div style={inputRowStyle}>
            <div style={labelBoxStyle}>จำนวน</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button style={circleBtnStyle} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <div style={qtyInputStyle}>{quantity}</div>
              <button style={circleBtnStyle} onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div style={inputRowStyle}>
            <div style={labelBoxStyle}>รวม:</div>
            <div style={greenBoxStyle}>{total.toLocaleString()}</div>
          </div>

          <div style={inputRowStyle}>
            <div style={labelBoxStyle}>ส่วนลด</div>
            <div style={greenBoxStyle}>{discount.toLocaleString()}</div>
          </div>

          <div style={inputRowStyle}>
            <div style={labelBoxStyle}>สุทธิ</div>
            <div style={greenBoxStyle}>{net.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;