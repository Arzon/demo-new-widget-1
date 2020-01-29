export const logo = {
  localhost: require("@/assets/img/innogy.svg"),
  innogy: require("@/assets/img/innogy.svg"),
  marke: require("@/assets/img/marke.svg"),
  enviam: require("@/assets/img/enviaM.jpg")
};
/**
 * in pdroduction indexOf should be . instead of :
 * */
export const company = {
  localhost: "innogy",
  innogy: "innogy",
  marke: "marke",
  enviam: "enviam"
};

export const redirectUrl = {
  innogy: "https://www.innogy-emobility.com/elektromobilitaet",
  marke: "https://www.mark-e.de/",
  enviam: "https://www.enviam.de/elektromobilitaet"
};

export const baseUrl = window.location.host
  .substr(0, window.location.host.indexOf(":"))
  .replace("-", "");
