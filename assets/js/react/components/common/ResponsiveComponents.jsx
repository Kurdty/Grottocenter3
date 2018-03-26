import React, {PropTypes} from 'react';
import styled from 'styled-components';

const EmptyDiv = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
);

EmptyDiv.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export const ShowDivOnMobile = styled(EmptyDiv)`
  display: block;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const HideDivOnMobile = styled(EmptyDiv)`
  display: none;

  @media (min-width: 550px) {
    display: block;
  }
`;

export const ShowDivOnTablet = styled(EmptyDiv)`
  display: block;

  @media (min-width: 750px) {
    display: none;
  }
`;

export const HideDivOnTablet = styled(EmptyDiv)`
  display: none;

  @media (min-width: 750px) {
    display: block;
  }
`;
