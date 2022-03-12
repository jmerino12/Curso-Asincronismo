const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("Upss!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

Promise.allSettled([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of response", response))
  .catch((error) => console.error(error));
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of response", response))
  .catch((error) => console.error(error));
