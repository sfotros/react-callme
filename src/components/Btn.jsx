import React from 'react';

const Btn = ({ bg, onClickProp, title }) => {
  return (
    <div>
      <button
        type='submit'
        style={{
          width: 120,
          height: 40,
          backgroundColor: bg,
          fontFamily: '"Special Elite", cursive',
          borderColor: bg,
          // border: 'none',
          borderRadius: 4,
          marginBottom: 18,
          marginTop: 10,
        }}
        onClick={onClickProp}
      >
        {title}
      </button>
    </div>
  );
};
export default Btn;
