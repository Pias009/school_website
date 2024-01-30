import React from "react";

const sizeClasses = {
  txtOutfitMedium20Gray800: "font-medium font-outfit",
  txtOutfitSemiBold22Gray800: "font-outfit font-semibold",
  txtRalewayRomanBold28: "font-bold font-raleway",
  txtOutfitMedium18Bluegray900: "font-medium font-outfit",
  txtOutfitMedium18: "font-medium font-outfit",
  txtOutfitMedium16: "font-medium font-outfit",
  txtOutfitExtraBold44: "font-extrabold font-outfit",
  txtOutfitMedium54: "font-medium font-outfit",
  txtOutfitMedium20Gray70001: "font-medium font-outfit",
  txtOutfitSemiBold24: "font-outfit font-semibold",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtOutfitMedium18Gray700: "font-medium font-outfit",
  txtRalewayRomanBold22: "font-bold font-raleway",
  txtRalewayRomanExtraBold60: "font-extrabold font-raleway",
  txtOutfitSemiBold20: "font-outfit font-semibold",
  txtRalewayRomanBold48: "font-bold font-raleway",
  txtOutfitMedium22Gray800: "font-medium font-outfit",
  txtOutfitSemiBold22: "font-outfit font-semibold",
  txtOutfitMedium20Gray900: "font-medium font-outfit",
  txtRalewayRomanBold68: "font-bold font-raleway",
  txtOutfitMedium22: "font-medium font-outfit",
  txtOutfitMedium20: "font-medium font-outfit",
  txtRalewayRomanBold30: "font-bold font-raleway",
  txtRalewayRomanBold58: "font-bold font-raleway",
  txtRalewayRomanExtraBold30: "font-extrabold font-raleway",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
