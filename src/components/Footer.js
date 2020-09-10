import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import getCompany from "./Constants/FooterCompany"
import Community from "./Constants/FooterCommunity"
import Resources from "./Constants/FooterResources"
import { setColor, setRem, media } from "../styles"


const Footer = () => {
  const url =
    typeof window !== `undefined` ? window.location.href.split("/") : "/"
  const path = url.slice(3, url.length)
  const lang =
    path[0] !== "zh-hans" && path[0] !== "zh-hant" && path[0] !== "ko"
      ? ""
      : path[0]
  const companies = getCompany(lang)

  return (
    <StyledFooter>
      <Column>
        Company
        <Menu>
          {companies.map(company => {
            return (
              <MenuItem key={company.text}>
                <Link to={company.path}>{company.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>
        Community
        <Menu>
          {Community.map(item => {
            return (
              <MenuItem key={item.text}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>
        Resources
        <Menu>
          {Resources.map(item => {
            return (
              <MenuItem key={item.text}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>
      <div className="ml-form-embed" data-account="1479110:v9j1r7r5k1" data-form="2081088:q7h7s1" style={{maxWidth: '20vw'}}>
            <div id="mlb2-2081088" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-2081088">
              <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm" >
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div className="ml-form-embedContent" >
                      <h4>Subscribe to our newsletter</h4>
                      <SectionP>Receive the latest about our newest partnerships, integrations, and events by subscribing to our weekly news update.</SectionP>
                    </div>
                    <form className="ml-block-form" action="https://app.mailerlite.com/webforms/submit/q7h7s1" data-code="q7h7s1" method="post" target="_blank">
                      <div className="ml-form-formContent">
                        <div className="ml-form-fieldRow">
                          <div style={{ margin: "10px 0 5px 0" }} className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Your Email address" autoComplete="email" />
                          </div>
                        </div>
                        <div className="ml-form-fieldRow ml-last-item">
                          <div style={{ margin: "10px 0 5px 0" }} className="ml-field-group ml-field-name">
                            <input type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="What should we call you?" autoComplete="name" />
                          </div>
                        </div>
                      </div>
                      <div className="ml-form-embedPermissions" >
                        <div className="ml-form-embedPermissionsContent default privacy-policy">
                          <SectionP>You can unsubscribe anytime. For more details, review our Privacy Policy.</SectionP>
                        </div>
                      </div>
                      <div className="ml-form-embedPermissions" >
                        <div className="ml-form-embedPermissionsContent default">
                          <h4>Marketing Permissions</h4>
                          <SectionP>The information you provide on this form will only be used to provide you with updates and personalized marketing. Your privacy is important to us! Please let us know how you would like to keep in touch:</SectionP>
                          <div className="ml-form-embedPermissionsOptions">
                            <div className="ml-form-embedPermissionsOptionsCheckbox">
                              <label htmlFor="newsletter-gdpr-1"> <input id="newsletter-gdpr1" type="checkbox" name="gdpr[]" value="Email" xp-if="gdpr.title" /> <span className="label-description">Email</span> </label>
                              <Description className="" xp-if="gdpr.description">We will send you occasional emails about promotions, new products and important updates to keep you in the loop.</Description>
                            </div>
                            <div className="ml-form-embedPermissionsOptionsCheckbox">
                              <label htmlFor="newsletter-gdpr-2"> <input id="newsletter-gdpr-2" type="checkbox" name="gdpr[]" value="Customized online advertising" xp-if="gdpr.title" />
                                <span className="label-description">Customized online advertising</span> </label>
                              <Description className="" xp-if="gdpr.description">We will use your information to show you ads that are more relevant to you to improve your online experience.</Description>
                            </div>
                          </div>
                        </div>
                        <div className="ml-form-embedMailerLite-GDPR">
                          <SectionP> By clicking below to submit this form, you acknowledge that the information you provide will be processed in accordance with our Privacy Policy. </SectionP>
                        </div>
                      </div>
                      <div className="ml-form-recaptcha ml-validate-required" style={{ float: "left" }}>
                        <style type="text/css">
                          {'.ml-form-recaptcha{margin-bottom:20px}.ml-form-recaptcha.ml-error iframe{border:solid 1px red}@media screen and (max-width:480px){.ml-form-recaptcha{width:220px!important}.g-recaptcha{transform:scale(.78);-webkit-transform:scale(.78);transform-origin:0 0;-webkit-transform-origin:0 0}}'}
                        </style>
                        <script src="https://www.google.com/recaptcha/api.js" />
                        <div className="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD">
                          <div style={{ width: "304px", height: "78px" }}><div>
                            { /* eslint-disable-next-line */}
                            <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD&amp;co=aHR0cHM6Ly93d3cubXhjLm9yZzo0NDM.&amp;hl=ko&amp;v=QVh-Tz10ahidjrORgXOS1oB0&amp;size=normal&amp;cb=tj37trcj5l94" width="304" height="78" role="presentation" name="a-yfd9a4yvwws" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{
                              width: "250px",
                              height: "40px",
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: "0px",
                              resize: "none",
                              display: "none"
                            }}></textarea></div><iframe title="must-have-a-unique-title-element-for-eslint" style={{ display: "none" }} /></div>
                      </div>
                      <input type="hidden" name="ml-submit" value="1" />
                      <div className="ml-form-embedSubmit">
                        <Subscribe type="submit" className="primary">Subscribe</Subscribe>

                        { /* eslint-disable-next-line react/self-closing-comp */}
                        <button disabled="disabled" style={{ display: "none" }} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div> </button>
                      </div>
                    </form>
                  </div>
                  <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                    <div className="ml-form-successContent">
                      <h4>Thank you!</h4>
                      <SectionP>You have successfully joined our subscriber list.</SectionP>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </Column>
    </StyledFooter>
  )
}

export const Subscribe = styled.button`
border-radius: 4px!important;
    box-shadow: none!important;
    color: #333!important;
    cursor: pointer;
    font-family: Roboto,Arial,Helvetica,sans-serif!important;
    font-size: 14px!important;
    font-weight: 700!important;
    line-height: 21px!important;
    height: auto;
    padding: 10px!important;
    width: 100%!important;
    box-sizing: border-box!important;`

export const Description = styled.div`
    color: #fff;
    font-family: Roboto,Arial,Helvetica,sans-serif;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 18px;
    margin: 18px 0 18px 0;
`;

export const SectionP = styled.p`
    color: #fff;
    font-family: 'Open Sans',Arial,Helvetica,sans-serif;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 10px 0; 
`

export const Menu = styled.ul`
  list-style: none;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s linear;
  padding: 1vh 0 0 0;
`

export const MenuItem = styled.li`
  font-weight: 300;
  padding-top: 1rem;
  font-size: 1rem;
`
/* eslint-disable */
export const Column = styled.div`
  list-style: none;
  font-weight: 500;
  overflow: hidden;
  transition: all 0.3s linear;
  color: white;
  margin-right: 10vw;
  font-size: 1rem;
  margin-top: ${setRem(30)};
  text-align: center;
  ${media.portraitTablet`margin-top: ${setRem(0)}; text-align: left; `}
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${setColor.navbar};
  color: ${setColor.mainWhite};
  padding: 10vh 8vw 20vh 8vw;
  a {
    text-decoration: none;
    color: white;
  }
  ${media.portraitTablet`
  flex-direction: row;
  `}
`
/* eslint-enable */
export default Footer
