import React, {PropTypes} from 'React';

const Index = (props) => (
  <div>
    {props.children}
  </div>
);

Index.propTypes = {
  children: PropTypes.node.isRequired
};

export default Index;
