import { FunctionSearch } from '../../components/FunctionSearch';
import { SplitSearch } from '../../components/SplitSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const split_function = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all', //エラーが複数あった場合、全て表示
    // shouldUnregister: true, //チェックボックスfalseのときinputの値消える
    defaultValues: {
      fns: [{ alph: 'A' }]
    }
  });
  const { handleSubmit } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('result', data))}>
          <SplitSearch />
          <FunctionSearch />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default split_function;
