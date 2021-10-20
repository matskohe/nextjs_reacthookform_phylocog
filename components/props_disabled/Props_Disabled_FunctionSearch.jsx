import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { FCGF } from '../../constants/FCGF';

export const Props_Disabled_FunctionSearch = (props) => {
  const methods = useFormContext();

  const {
    // control, // useFormContextを使う場合はcontrol不要
    // handleSubmit,
    watch,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    // control,
    name: 'fns',
  });

  // {
  //   control,
  //   // handleSubmit,
  //   watch
  // } = useForm({
  //   defaultValues: {
  //     fns: [{ alph: 'A' }]
  //   }
  // });

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'fns'
  // });

  // const onSubmit = data => {
  //   console.log('data', data);
  // };

  const options = Object.keys(FCGF);

  // console.log('options', options);
  // console.log('watch', watch());

  return (
    <>
      {/* <h2>Function Search</h2> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <ul className="select-list">
        {fields.map((item, index) => {
          return (
            <div key={`RF${item.id}`}>
              {index === 0 || (
                <li key={`or${item.id}`} className="or">
                  or
                </li>
              )}

              <li key={item.id}>
                <Controller
                  defaultValue="A"
                  render={({ field: { value, onChange } }) => {
                    return (
                      <select
                        value={value}
                        onChange={onChange}
                        disabled={!props.disabled}
                      >
                        {options.map((opt) => (
                          <option key={opt} value={opt}>
                            {FCGF[opt]}
                          </option>
                        ))}
                      </select>
                    );
                  }}
                  name={`fns[${index}].alph`}
                  // control={control}
                />
                {/* indexが1のときはdeleteボタン無し */}
                {index !== 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    // disabled={!props.watchFunction}
                  >
                    Delete
                  </button>
                )}
              </li>
            </div>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ alph: 'A' });
          }}
          disabled={!props.disabled}
        >
          append
        </button>
      </section>
      {/* <input type="submit" /> */}
      {/* </form> */}
    </>
  );
};
