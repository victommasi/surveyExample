import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

type NavigationButtonGroupProps = {
  handlePrevious: () => void,
  isLoading?: boolean,
  isDisabled?: boolean,
}

const NavigationButtonGroup = (props: NavigationButtonGroupProps) => {
  const { formState: { isValid }, } = useFormContext();

  return (
    <div className="flex justify-center" role="group">
      <button
        type="button"
        onClick={props.handlePrevious}
        className="outline-0 px-4 py-2 w-24 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700">
        Previous
      </button>
      <button
        type="submit"
        disabled={!isValid}
        className={classNames("outline-0 transition-colors disabled:opacity-50 px-4 py-2 w-24 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-r-lg focus:z-10 focus:ring-2 ", {
          "text-gray-300 hover:bg-gray-100 hover:text-violet-700": !isValid,
          "bg-violet-600 text-white !hover:bg-violet-100 !hover:text-white focus:ring-violet-700 focus:text-white": isValid
        })}>
        Next
      </button>
    </div>
  )
}

export default NavigationButtonGroup;