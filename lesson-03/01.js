const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
function createColorString() {
  let createColors = colors.filter(function (element) {
    return (
      element === "черный" || element === "красный" || element === "желтый"
    );
  });
  return createColors.join("-");
}
console.log(createColorString());
