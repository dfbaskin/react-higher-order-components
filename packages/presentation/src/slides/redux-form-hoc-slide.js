import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
const MyForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  )
};  

export default reduxForm({
  form: 'my-form',
  validate,
  initialValues: { min: '1', max: '10' }
})(MyForm);
`;

export class ReduxFormHocSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
