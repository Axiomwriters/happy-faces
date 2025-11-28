import React, { useState, useEffect } from 'react'

function Donate() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    document.body.appendChild(script);
  }, []);

const handlePay = () => {
  if (!amount || Number(amount) <= 0) {
    alert("Enter a valid amount");
    return;
  }

  if (!name) {
    alert("Enter your name");
    return;
  }

  const handler = window.PaystackPop.setup({
    key: "pk_test_bd287703274461e0480db1f0a0c4e44cf3cd99a7",

    email: "donor@example.com", // REQUIRED 🔥

    amount: Number(amount) * 100,

    currency: "KES", // Switch to "NGN" if KES is not activated

    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone_number",
          value: phoneNumber,
        },
      ],
    },

    callback: (response) => {
      alert("Payment successful! Reference: " + response.reference);
    },

    onClose: () => {
      alert("Payment canceled");
    },
  });

  handler.openIframe();
};


    const style = {
        input: 'block w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none',
        button: 'block w-full px-4 py-2 bg-green-400 text-white rounded-lg'
    }

  return (
    <div className='px-4'>
        <h1>Make Your payments</h1>
        <h2>Bank Payments</h2>
        <div>
            <input 
                type='text'
                value={name}
                placeholder='Full Name'
                className={style.input}
                onChange={e => setName(e.target.value)}
            />
             <input 
                type='text'
                value={phoneNumber}
                placeholder='Phone Number'
                className={style.input}
                onChange={e => setPhoneNumber(e.target.value)}
            />
             <input 
                type='text'
                value={amount}
                placeholder='Enter Amount'
                className={style.input}
                onChange={e => setAmount(e.target.value)}
            />
            <button type='submit' onClick={handlePay}>Donate</button>
        </div>
    </div>
  )
}

export default Donate