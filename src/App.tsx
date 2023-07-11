import './index.css'
import { surveyData } from './data/surveyData';
import NavigationButtonGroup from './components/NavigationButtonGroup';
import { FormProvider, useForm } from 'react-hook-form';
import QuestionTitle from './components/QuestionTitle';
import ContentDescription from './components/ContentDescription';
import AnswerGroup from './components/AnswerGroup';
import AnswerOption from './components/AnswerOption';
import { getOptionLetter } from './utils/stringUtils';
import { useEffect, useState } from 'react';
import Toogle from './components/Toggle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formSchema = yup.object({
  answer: yup.lazy(val => (Array.isArray(val) ? yup.array().of(yup.string()).nullable().min(1) : yup.string())),
});

const App = () => {
  const [isMultiple, setMultiple] = useState<boolean>(false);
  const data = surveyData;
  const formData = useForm({ mode: "onChange", defaultValues: { answer: null },  resolver: yupResolver(formSchema)});

  useEffect(() => {
    formData.reset();
  }, [formData, isMultiple])

  const handlePrevious = (): void => {
    return;
  }

  const onSubmit = formData.handleSubmit((values) => {
    alert(JSON.stringify(values));
  });

  const parseQuestionDescription = (title: string): string => {
    return isMultiple ? title.replace('$n', 'all') : title.replace('$n', 'one');
  }

  return (
    <main className="flex flex-col max-w-[640px] mx-auto p-6 gap-8">
      <div className="flex flex-col gap-4">
        <Toogle
          text={isMultiple ? `Multiple Answer` : `Single Answer`}
          checked={isMultiple}
          onChange={() => setMultiple(!isMultiple)} />
      </div>
      <div className="flex flex-col gap-8 px-4 py-6 rounded-lg bg-slate-50">
        <QuestionTitle text={data.questionTitle} />
        <ContentDescription text={parseQuestionDescription(data.description)} />
        <FormProvider {...formData}>
          <form className="group flex flex-col gap-4" onSubmit={onSubmit}>
            <AnswerGroup>
              {data.answers.map((answer: Record<string, string>, index: number) => {
                return (
                  <AnswerOption
                    key={answer.value}
                    id={answer.value}
                    name="answer"
                    type={isMultiple ? "checkbox" : "radio"}
                    label={answer.label}
                    letter={getOptionLetter(index)}
                    />
                )
              })}
            </AnswerGroup>
            <NavigationButtonGroup handlePrevious={handlePrevious} />
          </form>
        </FormProvider>
      </div>
    </main>
  )
}

export default App;
