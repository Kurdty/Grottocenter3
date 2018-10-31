import React from 'react';
import GCLink from '../common/GCLink';
import InternationalizedLink from '../common/InternationalizedLink';
import {contactLinks, legalLinks, contributorsLink} from '../../conf/Config';
import Translate from '../common/Translate';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

const FooterLinksList = styled.ul`
  display: inline-block;
  margin: 20px 0;
  list-style: none;
  font-size: large;
`;

const SocialLink = styled.div`
  text-decoration: none;
  font-size: large;
  color: ${props => props.muiTheme.palette.textIconColor};

  :hover {
    color: ${props => props.muiTheme.palette.accent1Color};
  }
`;

const LinkItem = styled.li`
  margin-bottom: 5px;
`;

const SocialGCLink = muiThemeable()(SocialLink.withComponent(GCLink));

const SocialIntlLink = muiThemeable()(SocialLink.withComponent(InternationalizedLink));

const FooterLinks = () => (
  <FooterLinksList>
    <LinkItem>
      <SocialGCLink internal={true} href='/ui/map'>
        <Translate>Access to map</Translate>
      </SocialGCLink>
    </LinkItem>
    <LinkItem>
      <SocialGCLink internal={true} href='/ui/faq'>
        <Translate>FAQ</Translate>
      </SocialGCLink>
    </LinkItem>
    <LinkItem>
      <SocialIntlLink links={contributorsLink}>
        <Translate>Contributors</Translate>
      </SocialIntlLink>
    </LinkItem>
    <LinkItem>
      <SocialIntlLink links={contactLinks}>
        <Translate>Contact</Translate>
      </SocialIntlLink>
    </LinkItem>
    <LinkItem>
      <SocialIntlLink links={legalLinks}>
        <Translate>Legal notice</Translate>
      </SocialIntlLink>
    </LinkItem>
  </FooterLinksList>
);

export default FooterLinks;
