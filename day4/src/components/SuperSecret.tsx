import React from "react";

export default function SuperSecret() {
  const [secret, setSecret] = React.useState('');

  if (secret === 'bra') {
    window.alert('You found the secret!')
  }

  return (
    <div className="space-y-4">
      <h2 className='text-center text-2xl'>What is the secret phrase?</h2>
      <input className='w-full px-4 py-2 text-gray-900 rounded' type="text" name="secret" placeholder='Super secret goes here' value={secret} onChange={(e) => setSecret(e.target.value)} />
      <p>Hint: complete <strong>abra kada</strong></p>
    </div >
  )
}
