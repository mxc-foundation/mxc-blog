import React from 'react';
import { Link } from 'gatsby';
import { StyledFooter, Column, Menu, MenuItem } from './Footer.styles';
import Company from '../Constants/FooterCompany';
import Community from '../Constants/FooterCommunity';
import Resources from '../Constants/FooterResources';

const Footer = () => {
	return (
		<StyledFooter>
			<Column>
				Company
				<Menu>
					{Company.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
			<Column>
				Community
				<Menu>
					{Community.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
			<Column>
				Resources
				<Menu>
					{Resources.map((item, index) => {
						return (
							<MenuItem key={index}>
								<Link to={item.path}>{item.text}</Link>
							</MenuItem>
						);
					})}
				</Menu>
			</Column>
		</StyledFooter>
	);
};

export default Footer;
