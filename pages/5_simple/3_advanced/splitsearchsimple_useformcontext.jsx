import { SplitSearchSimple } from '../../../components/simple/SplitSearchSimple';
import { FormProvider, useForm } from 'react-hook-form';

export const splitsearchsimple_useformcontext = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all' //エラーが複数あった場合、全て表示
  });
  const { handleSubmit } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('data', data))}>
          <SplitSearchSimple />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default splitsearchsimple_useformcontext;
