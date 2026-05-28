export function formatINR(val) {
  const n = parseFloat(val);

  if (isNaN(n)) return val;

  return "₹" + n.toLocaleString("en-IN");
}
