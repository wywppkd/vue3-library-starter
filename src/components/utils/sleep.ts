export const sleep = (wait = 1500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, wait);
  });
};
