import React from 'react';
import InternationalizedLink from '../common/InternationalizedLink';
import {wikicavesLink} from '../../conf/Config';
import Translate from '../common/Translate';
import styled from 'styled-components';
import GCLogo from '../common/GCLogo';

const PublisherInfo = styled.div`
  background-color: ${props => props.bgColor};
  display: inline-block;
  padding: 5px;
  text-align: center;
`;

const PublisherLogo = styled(GCLogo)`
  & > img {
    width: 100px;
    display: block;
    margin: auto;
  }
`;

const PublisherWrapper = styled.div`
  @media (min-width: 550px) {
    text-align: left;
  }
`;

const Publisher = () => (
  <PublisherWrapper>
    <div>
      <Translate>Published by</Translate>
    </div>
    <PublisherInfo bgColor='#e8dcd8'>
      <InternationalizedLink links={wikicavesLink}>
        <PublisherLogo showLink={false} />
        <Translate>Wikicaves association</Translate>
      </InternationalizedLink>
    </PublisherInfo>
  </PublisherWrapper>
);

export default Publisher;
