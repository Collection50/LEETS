import { POSITION_TYPES, POSITION_INFO } from '@/constants';
import { Dispatch, SetStateAction } from 'react';
import { KeyOf } from '@/types';
import * as S from './PositionFilter.styled';

type PositionFilterProps = {
  clickHandler: Dispatch<SetStateAction<KeyOf<typeof POSITION_INFO>>>;
  type: KeyOf<typeof POSITION_INFO>;
};

const PositionFilter = ({ clickHandler, type }: PositionFilterProps) => {
  const isTargetEnabled = (position: string) => position === type;

  return (
    <S.FilterContainer>
      <S.FilterByPosition>
        {POSITION_TYPES.map((position) => (
          <S.FilterBackground key={position} onClick={() => clickHandler(position)} enable={isTargetEnabled(position)}>
            <S.FilterText enable={isTargetEnabled(position)}>{POSITION_INFO[position]}</S.FilterText>
          </S.FilterBackground>
        ))}
      </S.FilterByPosition>
    </S.FilterContainer>
  );
};

export default PositionFilter;
