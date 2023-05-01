const generateRandomCharacters = (charactersCount: number = 6): string => {
  let randomCharacters: string = "";
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < charactersCount; i++) {
    randomCharacters += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomCharacters;
};

export default generateRandomCharacters;
