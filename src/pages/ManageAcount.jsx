import React, {useState} from 'react'
import { AddBank } from '../components/Dashboard/TabContent/AddBank';
import ViewBank from '../components/Dashboard/TabContent/ViewBank';

export const ManageAcount = (back, setBack) => {

  const [viewTab, showViewTab] = useState(false);
  const [addTab, showAddTab] = useState(true);
  const handleChange = () => {
    showViewTab((p) => !p);
    showAddTab((p) => !p);
  };

  return (
    <>
      {addTab && <AddBank show={handleChange} />}
      {viewTab && <ViewBank show={handleChange} />}
    </>
  );
};