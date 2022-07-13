import { useState, useEffect} from 'react'
import { _getContacts } from '../api/contacts';

export const useContacts = (filter) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  
  useEffect(() => {
    const getContacts = async () => {
        try{
            const response = await _getContacts();
            setContacts(response?.data);
            setFilteredContacts(response?.data);
        }catch(error){}
    }
    getContacts();
  }, []);

  useEffect(() => {
    if(contacts?.length > 0){
      if(!filter) setFilteredContacts(contacts);
      else
        setFilteredContacts([...contacts]?.filter(contact => {
          return contact?.first_name?.toLowerCase()?.includes(filter.toLowerCase()) || contact?.last_name?.toLowerCase()?.includes(filter.toLowerCase())
        }));
    }
  }, [filter])

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact].sort( (a,b) => {
      if(a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
      if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
      return 0;
    })
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  }


  return [filteredContacts, addContact];
}
