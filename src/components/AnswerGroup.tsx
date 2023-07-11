import { PropsWithChildren } from 'react';

const AnswerGroup = (props: PropsWithChildren) => {
  return (
    <fieldset className="flex flex-col gap-4">
      {props.children}
    </fieldset>
  );
}

export default AnswerGroup;