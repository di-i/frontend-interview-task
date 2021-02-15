import { Link } from 'react-router-dom';
import Helpers from '../helpers/Helpers';
import { StyledButton, StyledTd, StyledTr } from './styled';
import PropTypes from 'prop-types';

export const Rows = (props) => {
  return props.items
    ? props.items.map((item) => {
        const { id, name, type, status, site, siteId } = item;
        return (
          <StyledTr key={id}>
            <StyledTd color={Helpers.getColorRowBorder(siteId)}>
              {name}
            </StyledTd>
            <StyledTd>{type}</StyledTd>
            <StyledTd color={Helpers.getColorStatus(status)}>{status}</StyledTd>
            <StyledTd>{site}</StyledTd>
            <StyledTd>
              <Link to={Helpers.getPathLink(status, id)}>
                <StyledButton type={Helpers.getTypeButton(status)}>
                  {Helpers.getTextButton(status)}
                </StyledButton>
              </Link>
            </StyledTd>
          </StyledTr>
        );
      })
    : [];
};

Rows.propTypes = {
  items: PropTypes.array.isRequired,
};
