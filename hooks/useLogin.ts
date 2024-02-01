'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { postAdminLogin, getAdmin } from '@/api';
import { ACCESS_TOKEN, ADMIN, LOGIN } from '@/constants';
import axios from 'axios';
import { LocalStorage } from '@/utils';
import { AdminLoginRequest } from '@/types';
import { useAppDispatch } from '@/store';
import { login } from '@/store/adminSlice';
import { useInputRef } from './useInputRef';

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { inputRef, changeHandler } = useInputRef<AdminLoginRequest>({
    defaultValues: LOGIN,
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;
    const { result } = await postAdminLogin({ id, password });
    if (!axios.isAxiosError(result)) {
      const admin = await getAdmin();
      LocalStorage.setItem(ACCESS_TOKEN, result.accessToken);

      if (!axios.isAxiosError(admin.result)) {
        dispatch(login({ name: admin.result.name }));
        router.replace(ADMIN.HOME);
      }
    }
  };
  return { changeHandler, onSubmitHandler };
};

export { useLogin };
