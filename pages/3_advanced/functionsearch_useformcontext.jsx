import { FunctionSearch } from '../../components/FunctionSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const functionsearch_useformcontext = () => {
  const methods = useForm({
    defaultValues: {
      fns: [{ alph: 'A' }]
    }
  });
  const { handleSubmit } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('data', data))}>
          <FunctionSearch />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default functionsearch_useformcontext;
