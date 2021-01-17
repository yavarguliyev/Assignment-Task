import React, { Fragment } from 'react';
import { Button, Header } from 'semantic-ui-react';

const RemovePhoto = () => {
  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header as='h3' size='medium' content='Удалить карточку' color='grey' textAlign='left' />
        <Header as='h2' size='tiny' content='Отправить карточку организации в архив?' color='grey' textAlign='left' />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color='teal' content='ОТМЕНА' />
          <Button color='teal' content='УДАЛИТЬ' />
        </div>
      </div>
    </Fragment>
  )
}

export default RemovePhoto
