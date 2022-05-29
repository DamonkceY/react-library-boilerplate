import * as React from "react";

export interface TextFieldComponentInterface {
  placeholder: string;
}

const TextFieldComponent:React.FC<{props: TextFieldComponentInterface}> = ({props}) => {
  const [textResult, setTextResult] = React.useState<string>('');
  const changedText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextResult(event.target.value);
  }

  return (
    <div>
      <input onChange={changedText} type="text" placeholder={props.placeholder}/>
      <h3>{textResult}</h3>
    </div>
  )
}

export default TextFieldComponent