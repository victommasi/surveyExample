import classNames from 'classnames';
import {PropsWithChildren} from 'react';

const FormSection = (props: PropsWithChildren<{ name: string }>) => (
  <div className={"form-section pt-1"}>
    <div className="flex items-center md:items-baseline mb-2 border-b-2 border-violet-700 text-violet-800">
      <div className={classNames("", "w-full font-medium text-lg px-2")}>{props.name}</div>
    </div>
    {props.children}
  </div>
);

export default FormSection;