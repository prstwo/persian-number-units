function numberFormatter(number) {
  if (number > 0) {
    console.log("number", number);
    let numberWithComma = number.toLocaleString();
    console.log("numberWithComma", numberWithComma);

    let seperatedNumberWithComma = numberWithComma.split(",");
    if (seperatedNumberWithComma.length === 0) {
      return number;
    }
    if (seperatedNumberWithComma.length === 1) {
      return number;
    }
    if (seperatedNumberWithComma.length === 2) {
      return `${seperatedNumberWithComma[0]} هزار `;
    }
    if (seperatedNumberWithComma.length === 3) {
      return ` ${
        seperatedNumberWithComma[0] == "000"
          ? ""
          : seperatedNumberWithComma[0] + " میلیون"
      } ${seperatedNumberWithComma[1] == "000" ? "" : "و "}     ${
        seperatedNumberWithComma[1] == "000"
          ? ""
          : seperatedNumberWithComma[1] + "هزار"
      }  `;
    }
    if (seperatedNumberWithComma.length === 4) {
      return ` ${
        seperatedNumberWithComma[0] == "000"
          ? ""
          : seperatedNumberWithComma[0] + " میلیارد"
      } ${seperatedNumberWithComma[1] == "000" ? "" : "و "}    ${
        seperatedNumberWithComma[1] == "000"
          ? ""
          : seperatedNumberWithComma[1] + " میلیون"
      } ${seperatedNumberWithComma[2] == "000" ? "" : "و "}     ${
        seperatedNumberWithComma[2] == "000"
          ? ""
          : seperatedNumberWithComma[2] + " هزار"
      }  `;
    } 
    else {
      return number;
    }
  } else {
    return 0;
  }
}