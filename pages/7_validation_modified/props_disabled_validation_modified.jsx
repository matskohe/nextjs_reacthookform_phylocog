import { Props_Disabled_FunctionSearch } from '../components/props_disabled_validation_modified/P_D_V_M_FunctionSearch';
import { Props_Disabled_SplitSearch } from '../components/props_disabled_validation_modified/P_D_V_M_SplitSearch';
import { FormProvider, useForm } from 'react-hook-form';

export const props_disabled_validation_modified = () => {
  const methods = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all', //エラーが複数あった場合、全て表示
    defaultValues: {
      fns: [{ alph: 'A' }],
    },
  });
  const { handleSubmit, register, watch } = methods;

  const watchSplitSearch = watch('split_search', false);
  const watchFunctionSearch = watch('function_search', false);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => console.log('result', data))}>
          <div>
            <div>
              <input type="checkbox" {...register('split_search')} />
              <label htmlFor="split">Split Search</label>
            </div>
            <fieldset disabled={!watchSplitSearch}>
            <Props_Disabled_SplitSearch watchSplitSearch={!watchSplitSearch}/>
            </fieldset>
          </div>
          <div>
            <div>
              <input type="checkbox" {...register('function_search')} />
              <label htmlFor="function">Function Search</label>
            </div>
            <fieldset disabled={!watchFunctionSearch}>
            <Props_Disabled_FunctionSearch />
            </fieldset>
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

export default props_disabled_validation_modified;
