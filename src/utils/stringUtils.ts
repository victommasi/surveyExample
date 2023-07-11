export const getOptionLetter = (index: number) => {
  if (index < 0 || index > 25) console.error('Invalid input. Please enter a number from 1 to 26.');
  return 'abcdefghijklmnopqrstuvwxyz'[index];
}