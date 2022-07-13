import React, { useState } from 'react'
import { useContacts, useLetters } from "../hooks";
import { Contact, CreateModal } from "../components/contacts";
import { PlusIcon, SearchIcon } from "@heroicons/react/solid";
import { _createContact } from '../api/contacts';

const Contacts = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [filter, setFilter] = useState("");
    const [contacts, addContact] = useContacts(filter);
    const [uniqueErrors, setUniqueErrors] = useState({phone: false, email: false})
    const letters = useLetters();
    
    const getFilteredLetterList = letter => contacts?.filter( contact => contact?.last_name.split("")[0].toLowerCase() == letter.toLowerCase());

    const handleSave = async contact => {
        const emailIsNotUnique = contacts?.some(c => contact?.email && c?.email == contact.email);
        const phoneIsNotUnique = contacts?.some(c => contact?.phone && c?.phone == contact.phone);
        if(emailIsNotUnique || phoneIsNotUnique){
            setUniqueErrors({phone: phoneIsNotUnique, email: emailIsNotUnique})
            return;
        }
        setUniqueErrors({phone: false, email: false})
        try{
            const response = await _createContact(contact);
            addContact({...contact, id: response?.data?.id})
            setIsCreateModalOpen(false);
        }catch(error){}
    }
    return (
        <div className='text-gray-800 w-full px-4 md:px-16'>
            <div className='my-16 flex justify-center text-center'>
                <div>
                    <h3 className='text-4xl font-semibold'>Contacts</h3>
                    <div>{contacts?.length} {filter && ("filtered")} contacts in your address book.</div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className="relative w-full md:w-1/4 lg:w-1/5">
                    <input
                        className="rounded-full border border-gray-300 border flex justify-between w-full pr-4 pl-12 py-2 font-medium"
                        type="text"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <SearchIcon className='h-6 w-6' aria-hidden="true" />
                    </div>
                </div>
                
                <button
                    className="ml-4 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center h-7 w-7 m-2"
                    type="button"
                    onClick={e => setIsCreateModalOpen(true)}
                >
                    <PlusIcon className='h-6 w-6' aria-hidden="true" />
                </button>
            </div>
            <div className='w-full'>{letters?.map((letter) => (
                <div key={`contact-list-page-${letter}`}>
                    {getFilteredLetterList(letter)?.length > 0 && (
                        <div className='text-2xl'>{letter}</div>
                    )}
                    {getFilteredLetterList(letter)?.map(contact => (
                        <div
                            key={`contact-list-page-${contact?.id}`}
                            className="mb-2"
                        >
                            <Contact contact={contact} />
                        </div>
                    ))}
                </div>
            ))}</div>
            <CreateModal open={isCreateModalOpen} uniqueErrors={uniqueErrors} setOpen={setIsCreateModalOpen} onSave={handleSave} />
        </div>
    )
}

export default Contacts