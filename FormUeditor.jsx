import { Ueditor } from '@mxjs/ueditor'
import { FormItem } from '@mxjs/a-form';

const FormUeditor = (props) => (
  <FormItem wrapperCol={{span: 12}} {...props}>
    <Ueditor/>
  </FormItem>
);

export default FormUeditor;
