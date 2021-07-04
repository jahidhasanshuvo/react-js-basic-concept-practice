const fetchData = (userId) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) =>
    res.json()
  );
const wrapPromise = (promise) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }
      return result;
    },
  };
};
export const fetchUserProfile = (userId) => {
  return {
    userProfile: wrapPromise(fetchData(userId)),
  };
};
