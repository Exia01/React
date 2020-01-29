const helper = {
  choice: foodArray => {
      return foodArray[Math.floor(Math.random() * foodArray.length)];
    },
    remove: (foodArray, item) => {
        let foundItem =  -1
        const filteredArr = foodArray.filter((value, index, foodArray)=> {
            console.log(value, index, foodArray)
            if(item === value) foundItem = index
            return item !== value;
        });
    return foundItem
  }
};

export default helper;
