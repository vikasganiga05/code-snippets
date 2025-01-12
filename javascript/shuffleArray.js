const shuffleArray = (array) => {
  // Create a copy of the input array to avoid modifying the original
  const result = array.slice();

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the current element with the randomly chosen one
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
};
