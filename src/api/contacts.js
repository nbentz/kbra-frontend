import Axios from 'axios';

export const _getContacts = () => {
    return Axios.get('/contacts/');
}

export const _createContact = (payload) => {
    return Axios.post('/contacts/', payload);
}