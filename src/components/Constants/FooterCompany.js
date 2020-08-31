export default function getCompany(lang) {
  const token = lang === "" ? "mxc-token" : "token"
  const supernode = lang === "" ? "mxc-supernode" : "supernode"
  const about = lang === "" ? "mxc-about" : "about"
  return [
    {
      path: `https://www.mxc.org/${about}`,
      text: "About",
    },
    {
      path: `https://www.mxc.org/${token}`,
      text: "Token",
    },
    {
      path: `https://www.mxc.org/${supernode}`,
      text: "Supernode",
    },
    {
      path: `/${lang}`,
      text: "Blog",
    },
    {
      path: "https://www.linkedin.com/jobs/mxc-foundation-jobs-worldwide/?f_C=11556897&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0",
      text: "Careers",
    },
    {
      path: "https://www.mxc.org/imprint.html",
      text: "Impressum",
    },
    {
      path: "https://www.mxc.org/privacy-policy.html",
      text: "Privacy Policy",
    },
    {
      path: "https://www.mxc.org/terms-and-conditions.html",
      text: "Terms & Conditions",
    },
  ]
}
