import uuid from 'uuid';

const flipCoin = arr => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const selectColor = arr => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return { id: uuid.v4(), color: arr[randomIndex] };
};

const newUniqueColorGenerator = (arr, currentColor) => {
  let newColor = currentColor;
  do{
    newColor = Math.floor(Math.random() * arr.length);
  }
  while (newColor === currentColor) {
  }
  console.log(currentColor,arr[newColor])
  return  arr[newColor];
};

export { flipCoin, selectColor, newUniqueColorGenerator };
