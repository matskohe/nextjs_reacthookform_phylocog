import { FunctionSearch } from '../../components/FunctionSearch';
import { SplitSearch } from '../../components/SplitSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const split_function = () => {
  const methods = useForm({
    //フォームからフォーカスが離れたタイミングでvalidate
    mode: 'onBlur',
    //エラーが複数あった場合、全て表示
    criteriaMode: 'all', 
    //チェックボックスfalseのときinputの値消える。functionの初期値も消えるので今回はoff。個別にunregisterが設定できない。（v　7.14）
    // shouldUnregister: true, 
    defaultValues: {
      fns: [{ alph: 'A' }]
    }
  });
  const { handleSubmit, watch, register } = methods;

  const watchShowSplit = watch('split', false);
  const watchShowFunction = watch('function', false);
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(data => console.log('result', data))}>
          <div>
            <div>
              <input type="checkbox" {...register('split')} />
              <label htmlFor="split">Split</label>
            </div>
            {watchShowSplit && <SplitSearch />}
          </div>

          <div>
            <div>
              <input type="checkbox" {...register('function')} />
              <label htmlFor="function">Function</label>
            </div>
            {watchShowFunction && <FunctionSearch />}
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default split_function;
