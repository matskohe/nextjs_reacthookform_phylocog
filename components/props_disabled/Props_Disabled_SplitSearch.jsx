//Custom validation
import { useFormContext } from 'react-hook-form';
export const Props_Disabled_SplitSearch = (props) => {
  const methods = useFormContext();
  //   {
  //   mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
  //   criteriaMode: 'all', //エラーが複数あった場合、全て表示
  //   shouldUnregister: true //チェックボックスfalseのときinputの値消える
  // }
  // errorsを表示するには、それを格納するformStateが必要
  const {
    register,
    // handleSubmit,
    watch,
    getValues,
    formState: { errors },
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
  const watchShowSplitIq = watch('split_iq', false);
  const watchShowSplitFast = watch('split_fast', false);

  //
  // [splitHigh, showSplitHigh] = useState(false)
  // [splitLow, showSplitLow] = useState(false)

  return (
    <>
      {/* <h2>Split Search</h2> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div>
        <input
          type="radio"
          {...register('split_iq')}
          disabled={!props.disabled}
          checked
        />
        <label htmlFor="split_iq">IQ Tree</label>
      </div>
      <div>
        <input
          type="radio"
          {...register('split_fast')}
          disabled={!props.disabled}
        />
        <label htmlFor="split_iq">Fast Tree</label>
      </div>

      <div>
        <p>split between</p>
        <input
          type="number"
          {...register('split_low', {
            valueAsNumber: true,
            required: 'required',
            min: { value: 0, message: 'equal or greater than 0' },
            max: { value: 100, message: 'equal or less than 100' },
          })}
          disabled={!props.disabled}
        />
        {errors.split_low && <p>* {errors.split_low.message}</p>}
        <span>　and　</span>
        <span>
          <input
            type="number"
            {...register('split_high', {
              valueAsNumber: true,
              required: 'required',
              min: { value: 0, message: 'equal or greater than 0' },
              max: { value: 100, message: 'equal or less than 100' },
              validate: {
                compare: (high) =>
                  getValues().split_low <= high ||
                  `the right should be equal or greater than the left`,
              },
            })}
            disabled={!props.disabled}
          />
          {/* https://codesandbox.io/s/react-hook-form-v6-errors-validatecriteriamode-all-p9xm6?file=/src/index.js:821-1031 */}

          {errors?.split_high?.types?.required && (
            <p>* {errors.split_high.types.required}</p>
          )}
          {errors?.split_high?.types?.min && (
            <p>* {errors.split_high.types.min}</p>
          )}
          {errors?.split_high?.types?.max && (
            <p>* {errors.split_high.types.max}</p>
          )}
          {errors?.split_high?.types?.compare && (
            <p>* {errors.split_high.types.compare}</p>
          )}
        </span>
      </div>
    </>
  );
};
