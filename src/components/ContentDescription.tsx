import classNames from 'classnames';

const QuestionSubtitle = (props: { text?: string, variant?: 'light' | 'dark' }) => {
  if (!props.text) return null;

  return (
    <p className={classNames("font-medium text-xs text-violet-600", {
      "text-white": props.variant === 'light',
      })}>
      {props.text}
    </p>
  )
}

export default QuestionSubtitle;