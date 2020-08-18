export function getTopMenu(lang) {
  const token = lang === "en" ? "mxc-token": "token";
  const Supernode = lang === "en" ? "mxc-supernode": "supernode";
  return [
    {
      path: "https://www.mxc.org/",
      text: "Home",
    },
    {
      path: "https://www.mxc.org/"+token,
      text: "Token",
    },
    {
      path: "https://www.mxc.org/"+Supernode,
      text: "Supernode",
    },
    {
      path: "/"+lang,
      text: "Blog",
    },
    {
      path: "https://www.mxc.org/about",
      text: "About",
    },
  ];
}