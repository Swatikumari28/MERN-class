const request = window.fetch("https://dummyjson.com/recipes");
console.log("request", request);
console.log("request", request);
const successCh = (response) => {
  console.log("response", response);
  const pr2 = response.json();
  pr2.then((data) => {
    console.log("Data", data);
  });
};
const errorCh = (err) => {
  alert("Unable to get the product -->", err.message);
};
request.then(successCh).catch(errorCh);
