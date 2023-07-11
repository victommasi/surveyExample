import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export interface AnswerOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  letter: string;
  name: string;
}

const AnswerOption = (props: AnswerOptionProps) => {
  const { register } = useFormContext();

  return (
    <div className="relative flex items-center">
      <input
        id={props.id}
        type={props.type}
        value={props.id}
        className="peer h-0 w-0 absolute z-[-1]"
        required={props.required}
        {...register(props.name)}
       />
      <label
        htmlFor={props.id}
        className={`w-full flex cursor-pointer select-none rounded-lg px-4 py-2 text-left border border-gray-300 transition
        bg-gray-50 text-gray-500 min-h-[42px] items-center peer-hover:border-violet-600 peer-focus:border-violet-600
        peer-checked:bg-violet-200 peer-checked:font-bold peer-checked:text-violet-600 peer-checked:border-violet-600
        hover:peer-checked:ring-1 peer-focus:peer-checked:ring-1 focus:peer-checked:ring-violet-600`}
        > 
        <span className='block w-full px-2.5 ml-4 text-sm leading-tight'>{props.label}</span>
      </label>
      <div data-letter={props.letter} data-check={'\u2713'} className={`absolute left-4 flex w-4 h-4 justify-center items-center px-1 border border-violet-600
        rounded text-sm font-bold text-violet-600 uppercase before:content-[attr(data-letter)] peer-checked:before:content-[attr(data-check)]
        peer-checked:before:text-white peer-checked:bg-violet-600`} />
    </div>
  );
}

export default AnswerOption;