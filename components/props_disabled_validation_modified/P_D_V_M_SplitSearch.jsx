//Custom validation
import { useFormContext } from 'react-hook-form';
export const Props_Disabled_SplitSearch = (props) => {
  const methods = useFormContext();
  //   {
  //   mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
  //   criteriaMode: 'all', //エラーが複数あった場合、全て表示
  //   shouldUnregister: true //チェックボックスfalseのときinputの値消える
  //
  // errorsを表示するには、それを格納するformStateが必要
  const {
    register,
    // handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = methods;

  // // errorsを表示するには、それを格納するformStateが必要
  // const {
  //   register,
  //   // handleSubmit,
  //   watch,
  //   getValues,
  //   formState: { errors }
  // } = useForm({
  //   mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
  //   criteriaMode: 'all' //エラーが複数あった場合、全て表示
  // });

  // const onSubmit = data => {
  //   alert(JSON.stringify(data));
  //   console.log(data);
  // };

  //
  // [splitHigh, showSplitHigh] = useState(false)
  // [splitLow, showSplitLow] = useState(false)

  return (
    <>
      {/* <h2>Split Search</h2> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {/* https://stackoverflow.com/questions/67626696/radio-buttons-with-react-hook-form */}
      <div>
        <label htmlFor="sp_iq">
          <input
            type="radio"
            {...register('tree')}
            name="tree"
            id="sp_iq"
            value="iq"
            defaultChecked
          />
          IQ Tree
        </label>
      </div>
      <div>
        <label htmlFor="sp_fast">
          <input
            type="radio"
            {...register('tree')}
            name="tree"
            id="sp_fast"
            value="fast"
          />
          Fast Tree
        </label>
      </div>

      <div>
        <p>split between</p>
        <div>
          <div>
            <input
              type="text"
              {...register('split_low', {
                valueAsNumber: true,

                // split searchをチェックして入力後、split searchをアンチェックしてもエラーが残るので使えない
                // min: { value: 0, message: 'equal or greater than 0' },
                // max: { value: 100, message: 'equal or less than 100' },

                validate: {
                  // only_integerがあるからいらなくなった
                  // my_required: (req) =>
                  //   props.watchSplitSearch ||
                  //   req ||
                  //   req === 0 ||
                  //   `number required`,

                  // https://qiita.com/taku-0728/items/329e0bee1c49b7ce7cd1
                  only_integer: (int) =>
                    props.watchSplitSearch ||
                    Number.isInteger(int) ||
                    'Integer required',
                  my_min: (min) =>
                    props.watchSplitSearch ||
                    // !errors?.split_low?.types?.my_required ||
                    0 <= min ||
                    'equal or greater than 0',
                  my_max: (max) =>
                    props.watchSplitSearch ||
                    // !errors?.split_low?.types?.my_required ||
                    max <= 100 ||
                    'equal or less than 100',
                },
              })}
            />

            {/* {!props.watchSplitSearch &&
              errors?.split_low?.types?.my_required && (
                <p>{errors.split_low.types.my_required}</p>
              )} */}

            {!props.watchSplitSearch &&
              errors?.split_low?.types?.only_integer && (
                <p>{errors.split_low.types.only_integer}</p>
              )}

            {/* {errors?.split_low?.types?.min && (
              <p>{errors.split_low.types.min}</p>
            )} */}
            {!props.watchSplitSearch && errors?.split_low?.types?.my_min && (
              <p>{errors.split_low.types.my_min}</p>
            )}

            {/* {errors?.split_low?.types?.max && (
              <p>{errors.split_low.types.max}</p>
            )} */}
            {!props.watchSplitSearch && errors?.split_low?.types?.my_max && (
              <p>{errors.split_low.types.my_max}</p>
            )}
          </div>

          <span>　and　</span>
          <div>
            <span>
              <input
                type="text"
                {...register('split_high', {
                  valueAsNumber: true,

                  // min: { value: 0, message: 'equal or greater than 0' },
                  // max: { value: 100, message: 'equal or less than 100' },
                  // validate の メッセージ前の||　の使い方はjavascript本来の&& の使い方https://react-hook-form.com/api/useform/register

                  validate: {
                    // my_required: (req) => req || req === 0 || `required`,
                    only_integer: (int) =>
                      props.watchSplitSearch ||
                      Number.isInteger(int) ||
                      'Integer required',
                    my_min: (min) =>
                      props.watchSplitSearch ||
                      // !errors?.split_low?.types?.my_required ||
                      0 <= min ||
                      'equal or greater than 0',
                    my_max: (max) =>
                      props.watchSplitSearch ||
                      // !errors?.split_low?.types?.my_required ||
                      max <= 100 ||
                      'equal or less than 100',
                    compare: (high) =>
                      props.watchSplitSearch ||
                      getValues().split_low <= high ||
                      `the right should be equal or greater than the left`,
                  },
                })}
              />
              {/* https://codesandbox.io/s/react-hook-form-v6-errors-validatecriteriamode-all-p9xm6?file=/src/index.js:821-1031 */}

              {!props.watchSplitSearch &&
                errors?.split_high?.types?.only_integer && (
                  <p>{errors.split_high.types.only_integer}</p>
                )}
              {!props.watchSplitSearch && errors?.split_high?.types?.my_min && (
                <p>{errors.split_high.types.my_min}</p>
              )}
              {!props.watchSplitSearch && errors?.split_high?.types?.my_max && (
                <p>{errors.split_high.types.my_max}</p>
              )}
              {!props.watchSplitSearch &&
                errors?.split_high?.types?.compare && (
                  <p>{errors.split_high.types.compare}</p>
                )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
