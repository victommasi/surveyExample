const QuestionTitle = (props: { text?: string }) => {
  return (
    <h2 className="font-medium text-xl leading-tight text-gray-800">
      {props.text}
    </h2>
  )
}

export default QuestionTitle;