const intl = new Intl.NumberFormat("ro-RO", {
  style: "currency",
  currency: "RON",
});

export const formatCurrency = (price) => {
  return intl.format(price);
};
