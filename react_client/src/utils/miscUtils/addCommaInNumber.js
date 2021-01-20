
function numberWithCommasFloat(number) {

  number = number.toString()
  number = number.split(".")
  let intPart = number[0], floatPart = number[1]

  intPart = numberWithCommasInt(intPart)

  return (intPart + "." + (floatPart ? floatPart : ''));
}

function numberWithCommasInt(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = {
  numberWithCommasFloat,
  numberWithCommasInt
}
