import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FCGF } from '../../constants/FCGF';

export const functionsearch = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      fns: [{ alph: 'A' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fns'
  });

  const onSubmit = data => {
    console.log('data', data);
  };

  const options = Object.keys(FCGF);

  console.log('options', options);
  console.log('watch', watch());

  return (
    <>
      <h2>Function Search</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                        <select value={value} onChange={onChange}>
                          {options.map(opt => (
                            <option key={opt} value={opt}>
                              {FCGF[opt]}
                            </option>
                          ))}
                        </select>
                      );
                    }}
                    name={`fns[${index}].alph`}
                    control={control}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
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
          >
            append
          </button>
        </section>
        <input type="submit" />
      </form>
    </>
  );
};

export default functionsearch;
