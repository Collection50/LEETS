import { css } from '@emotion/react';
import { tablet, desktop } from '../../utils/viewports';

export const headContainer = height => css`
  width: 100%;
  height: ${height + 50}px;

  ${tablet} {
    height: ${height + 250}px;
  }

  ${desktop} {
    height: ${height}px;
  }

  display: flex;
  justify-content: center;
  align-items: end;
`;

export const titleStyle = css`
  color: white;

  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10vw;

  width: content;
  height: 90%;

  letter-spacing: -0.03em;
`;
