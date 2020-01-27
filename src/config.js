export const logo = {
  localhost: require("@/assets/img/innogy.svg"),
  innogy: require("@/assets/img/innogy.svg"),
  marke: require("@/assets/img/marke.svg"),
  enviam: require("@/assets/img/enviaM.jpg")
};

export const baseUrl = window.location.host
  .substr(0, window.location.host.indexOf(":"))
  .replace("-", "");
