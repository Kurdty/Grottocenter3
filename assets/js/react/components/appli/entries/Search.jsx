import React from 'React';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {GridContainer, GridRow, GridFullColumn} from '../../common/Grid';

const Search = () => (
  <GridContainer>
    <GridRow>
      <GridFullColumn>
        <Card>
          <CardText>
            Formulaire de recherche non implémenté
          </CardText>
        </Card>
      </GridFullColumn>
    </GridRow>
    <GridRow>
      <GridFullColumn>
        <Card>
          <CardTitle title='Résultats' />
          <CardText>
            Tableau de résultats non implémenté
          </CardText>
        </Card>
      </GridFullColumn>
    </GridRow>
  </GridContainer>
);

export default Search;
