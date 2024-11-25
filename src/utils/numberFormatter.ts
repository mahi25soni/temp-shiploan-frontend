import numbro from "numbro";

const formatNumber = (value: any, type?: string) => {
  if (type === "currency") {
    return numbro(value).formatCurrency({
      thousandSeparated: true,
      currencySymbol: "₹",
      spaceSeparated: true,
    });
  }

  let formated = numbro(value).format({ thousandSeparated: true, mantissa: 1 });
  if (type === "percentage") {
    return `${formated} %`;
  }
  if (type === "time") {
    return `${formated} mo`;
  }

  return formated;
};

export default formatNumber;
