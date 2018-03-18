import React, {PropTypes} from 'React';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {GridContainer, GridRow, GridOneThirdColumn, GridTwoThirdColumn, GridFullColumn} from '../../common/Grid';
import styled from 'styled-components';

const EntriesContainer = styled(GridContainer)`
  max-width: initial;

  .row {
    margin-bottom: 5%;
  }

  @media (min-width: 550px) {
    width: 95%;
  }

  @media (min-width: 1000px) {
    .row {
      margin-bottom: 2%;
    }
  }
`;

const WarningCardText = styled(CardText)`
  background-color: red;
  color: white !important;
`;

const Details = (props) => {
  let title = 'Détails de l\'entrée : ' + props.params.id;

  // https://wiki.grottocenter.org/wiki/Fr/0006077

  return (
    <EntriesContainer>
      <GridRow>
        <GridFullColumn>
          <Card>
            <WarningCardText>
              Texte qui apparaît si la cavité est sensible
            </WarningCardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridTwoThirdColumn>
          <Card>
            <CardTitle title={title} />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridTwoThirdColumn>
        <GridOneThirdColumn>
          <Card>
            <CardText>
              MAP
            </CardText>
          </Card>
        </GridOneThirdColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Localisation' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Description' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Topographie' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Fiche équipement' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Historique' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Commentaires' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
      <GridRow>
        <GridFullColumn>
          <Card>
            <CardTitle title='Bibliographie' actAsExpander={true} showExpandableButton={true} />
            <CardText expandable={true} initiallyExpanded={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </GridFullColumn>
      </GridRow>
    </EntriesContainer>
  );
}

Details.propTypes = {
  params: PropTypes.object.isRequired
};

export default Details;
