import React, {PropTypes} from 'React';

const Index = (props) => (
  <div>
    Section des entrées
    {props.children}
  </div>
);

Index.propTypes = {
  children: PropTypes.func.isRequired
};

export default Index;
