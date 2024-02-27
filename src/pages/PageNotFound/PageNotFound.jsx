import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>¡Se enfrió la zappi!</FoundSubtitleStyled>
          <p>Parece que la página que buscás no existe o fue removida</p>
          <Link />
        </FoundTextStyled>
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
