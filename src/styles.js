export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
}

export const setFont = {
  main: "font-family: 'Roboto', sans-serif;",
}

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`
}
