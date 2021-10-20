//Custom validation
import { useForm } from 'react-hook-form';

export const splitsearchsimple = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm({
    mode: 'onBlur', //フォームからフォーカスが離れたタイミングでvalidate
    criteriaMode: 'all' //エラーが複数あった場合、全て表示
  });

  const onSubmit = data => {
    console.log(data);
  };
  
  const watchShowAll = watch();

  return (
    <>
      <h2>Split Search</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input type="radio" value="iq" {...register('split_type')} /> IQ Tree
        </div>

        <div>
          <input type="radio" value="fast" {...register('split_type')} />
          Fast Tree
        </div>

        <div>
          <p>split between</p>
          <input
            type="number"
            {...register('split_low', {
              valueAsNumber: true,
              required: 'required',
              min: { value: 0, message: 'equal or greater than 0' },
              max: { value: 100, message: 'equal or less than 100' }
            })}
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
                  compare: high =>
                    getValues().split_low <= high ||
                    `the right should be equal or greater than the left`
                }
              })}
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
        

        <input type="submit" />
      </form>
    </>
  );
};

export default splitsearchsimple;
