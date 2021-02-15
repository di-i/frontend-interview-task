import { StyledLink, StyledTextButton } from './styled';
import { useHistory } from 'react-router-dom';
import { ChevronLeft } from '../chevrons/ChevronLeft';
import { colors } from '../../../constants/colors';

export const GoBackLink = () => {
  const history = useHistory();
  return (
    <StyledLink onClick={() => history.goBack()}>
      <ChevronLeft color={colors.fontMain} />
      <StyledTextButton>Back</StyledTextButton>
    </StyledLink>
  );
};
