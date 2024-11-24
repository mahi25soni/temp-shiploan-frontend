import numbro from "numbro";

const formatNumber = (value: any, type?: string) => {
  if (type === "currency") {
    return numbro(value).formatCurrency({
      thousandSeparated: true,
      currencySymbol: "₹",
      spaceSeparated: true,
    });
  }

  if (type === "percentage") {
    return `${numbro(value).format({ thousandSeparated: true, mantissa: 0 })}%`;
  }

  return numbro(value).format({ thousandSeparated: true, mantissa: 0 });
};

export default formatNumber;
