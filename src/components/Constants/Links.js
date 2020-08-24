export function getTopMenu(lang) {
  const token = lang === "" ? "mxc-token": "token";
  const supernode = lang === "" ? "mxc-supernode": "supernode";
  const about = lang === "" ? "mxc-about": "about";
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
      path: "https://www.mxc.org/"+supernode,
      text: "Supernode",
    },
    {
      path: "/"+lang,
      text: "Blog",
    },
    {
      path: "https://www.mxc.org/"+about,
      text: "About",
    },
  ];
}