export const updateJokeScore = (jokeList, id, action) => {

  let jokeState = jokeList.filter(joke => joke.id !== id);
  let jokeObj = jokeList.find(joke => joke.id === id);
  switch (action) {
    case "add":
      jokeObj.score = jokeObj.score + 1;
      break;
    case "subtract":
      jokeObj.score = jokeObj.score - 1;
      break;
    default:
      break;
  }
  jokeState.push(jokeObj);
  return jokeState;
};

export const emojiSelector = score => {
  let emojis = ["😡", "😠", "😑", "😐", "🙂", "😂", "🤣"];
  let emoji;

  if (score === 0) {
    return (emoji = "😐");
  } else if (score <= -5) {
    return (emoji = "😡");
  } else if (score <= -3) {
    return (emoji = "😠");
  } else if (score <= -1) {
    return (emoji = "😑");
  } else if (score >= 5) {
    emoji = "🤣";
    return emoji;
  } else if (score >= 3) {
    emoji = "😂";
    return emoji;
  } else if (score >= 1) {
    emoji = "🙂";
    return emoji;
  } else {
    return;
  }
};
