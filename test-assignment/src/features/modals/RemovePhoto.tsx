import React, { Fragment, useContext } from 'react';
import { Button, Header } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';

const RemovePhoto = () => {
  const rootStore = useContext(RootStoreContext);
  const { closeModal } = rootStore.modalStore;

  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header as='h3' size='medium' content='Удалить карточку' color='grey' textAlign='left' />
        <Header as='h2' size='tiny' content='Отправить карточку организации в архив?' color='grey' textAlign='left' />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={closeModal} color='teal' content='ОТМЕНА' />
          <Button onClick={() => console.log('Removed')} color='teal' content='УДАЛИТЬ' />
        </div>
      </div>
    </Fragment>
  )
}

export default RemovePhoto
