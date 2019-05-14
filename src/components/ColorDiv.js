import React from 'react';


export default function ColorDiv({ color }){
  console.log('color in div', color);
  return (
    <div style={{ width: '200px', height: '100px', backgroundColor: color }}>
      im a div
    </div>
  );
}
