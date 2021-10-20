//checkboxの値によって、その下のcomponentのinputをdisabledにしたり、しなかったり 自前のpropsで
import { Props_Disabled_FunctionSearch } from '../../components/props_disabled/Props_Disabled_FunctionSearch';
import { Props_Disabled_SplitSearch } from '../../components/props_disabled/Props_Disabled_SplitSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const props_disabled = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all', //エラーが複数あった場合、全て表示
    defaultValues: {
      fns: [{ alph: 'A' }],
    },
  });
  const { handleSubmit, register, watch } = methods;

  const watchSplitSearch = watch('split', false);
  const watchFunctionSearch = watch('function', false);
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => console.log('result', data))}>
          <div>
            <div>
              <input type="checkbox" {...register('split')} />
              <label htmlFor="split">Split Search</label>
            </div>
            <Props_Disabled_SplitSearch disabled={watchSplitSearch} />
          </div>
          <div>
            <div>
              <input type="checkbox" {...register('function')} />
              <label htmlFor="function">Function Search</label>
            </div>
            <Props_Disabled_FunctionSearch disabled={watchFunctionSearch} />
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default props_disabled;
