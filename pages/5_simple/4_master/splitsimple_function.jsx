import { FunctionSearch } from '../components/FunctionSearch';
import { SplitSearchSimple } from '../components/simple/SplitSearchSimple';
import { FormProvider, useForm } from 'react-hook-form';

export const splitsimple_function = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all', //エラーが複数あった場合、全て表示
    defaultValues: {
      fns: [{ alph: 'A' }]
    }
  });
  const { handleSubmit, register } = methods;


  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('result', data))}>
          <div>
            <div>
              <input type="checkbox" {...register('split')} />
              <label htmlFor="split">Split Search</label>
            </div>
            <SplitSearchSimple />
          </div>
          <div>
            <div>
              <input type="checkbox" {...register('function')} />
              <label htmlFor="function">Function Search</label>
            </div>
            <FunctionSearch />
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default splitsimple_function;
