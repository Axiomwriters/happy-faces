import React, { useState } from 'react'

function Donate() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

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
            <button type='button' className={style.button}>Donate</button>
        </div>
    </div>
  )
}

export default Donate