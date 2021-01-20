import React, { useContext } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';

const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.commonStrore;

  return (
    <Form onSubmit={() => login().catch(error => { console.log(error) })}>
      <Header as='h2' content='Login to Reactivities' color='teal' textAlign='center' />
      <Button color='teal' content='Login' fluid />
    </Form>
  )
}

export default LoginForm;