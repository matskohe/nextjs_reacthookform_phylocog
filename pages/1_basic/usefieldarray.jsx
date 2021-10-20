//Select form dynamically added by useFieldArray and Controller
import { useForm, useFieldArray, Controller } from 'react-hook-form';

export const UseFieldArray = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      test: [{ alph: 'C' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test'
  });

  const onSubmit = data => console.log('data', data);

  console.log('watch', watch());

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <Controller
                  defaultValue="B"
                  render={({ value, onChange }) => {
                    return (
                      <select value={value} onChange={onChange}>
                        <option key="A" value="A">
                          A
                        </option>
                        <option key="B" value="B">
                          B
                        </option>
                        <option key="C" value="C">
                          C
                        </option>
                      </select>
                    );
                  }}
                  name={`test[${index}].alph`}
                  control={control}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
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

export default UseFieldArray;
