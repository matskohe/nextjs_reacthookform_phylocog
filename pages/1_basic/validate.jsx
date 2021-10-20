//Simple input validation
import { useForm } from 'react-hook-form';

export const Validate = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({ criteriaMode: 'all' });
  const onSubmit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('testy', {
            required: true,
            minLength: 2,
            maxLength: 4
          })}
        />
        {errors?.testy?.types?.required && <p>required</p>}
        {errors?.testy?.types?.minLength && <p>should be more than 2</p>}
        {errors?.testy?.types?.maxLength && <p>should be less than 4</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Validate;
