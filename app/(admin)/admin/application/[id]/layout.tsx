import { ReactNode } from 'react';
import type { Metadata } from 'next';
import WithLogout from '@/components/Admin/WithLogout';
import Nav from '@/components/Admin/Nav';
import * as S from './styled';

export const metadata: Metadata = {
  title: '지원서 상세',
};

const ApplicationDetailLayout = ({ children }: { children: ReactNode }) => (
  <S.ContentContainer>
    <WithLogout>
      <Nav />
    </WithLogout>
    {children}
  </S.ContentContainer>
);

export default ApplicationDetailLayout;
