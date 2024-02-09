import Form from '@/components/Form';
import { getUserApplication } from '@/api';
import { getServerSession } from 'next-auth';
import { authOptions, ApplyProvider } from '@/app/lib';

const getApplication = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.accessToken;
  const submitStatus = session?.submitStatus;
  try {
    const { result } = await getUserApplication(token);
    return { result, submitStatus, token };
  } catch (err) {
    return { submitStatus, token };
  }
};

const Apply = async () => {
  const application = await getApplication();

  return (
    <ApplyProvider application={application}>
      <Form />
    </ApplyProvider>
  );
};

export default Apply;
