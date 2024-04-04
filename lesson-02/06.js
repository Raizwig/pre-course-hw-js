let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
console.log(passportWithAddress.address.city);
let copyPassportWithAddress = structuredClone(passportWithAddress);
copyPassportWithAddress.address.city = "Bobryisk";
console.log(copyPassportWithAddress.address.city);
