import { SplitSearch } from '../../components/SplitSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const splitsearch_useformcontext = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all' //エラーが複数あった場合、全て表示
    // shouldUnregister: true //チェックボックスfalseのときinputの値消える
  });
  const { handleSubmit } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('data', data))}>
          <SplitSearch />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default splitsearch_useformcontext;
