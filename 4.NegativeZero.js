//TODO: Negative Number *=> Value of Negative Number
var trendRate = -0;
console.log(trendRate); // -0

//TODO: TypeCast  *=> -0 => String
typeCast = trendRate.toString();
console.log(typeCast); //! True  How????

//TODO: Check ===> -0 === 0
check = trendRate === 0;
console.log(check); //! True ! How????

// TODO: Check ===> > and <

check1 = trendRate > 0;
check2 = trendRate < 0;
console.log(check1, check2); //! False

// TODO: Need to Debug
function formatTrend() {
  var direction = trendRate < 0 || Object.is(trendRate, 0) ? "✔" : "🌋";
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0));
console.log(formatTrend(0));
