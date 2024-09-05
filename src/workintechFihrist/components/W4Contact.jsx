import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useContactDetais } from '../services/queries';
import { useDeleteContact } from '../services/mutations';

export default function W4Contact() {
    const { contactId } = useParams();
    const { data: contact, isPending, error } = useContactDetais(contactId);
    const deleteContactMutation = useDeleteContact();
    const history = useHistory();

    if (isPending) return 'loading';
    if (error) return 'an error has occured...';

    return (
        <div id="contact">
            <div>
                <img key={contact.avatar} src={contact.avatar || null} />
            </div>

            <div>
                <h1 data-testid="full_name">
                    {contact.first_name || contact.last_name ? (
                        <>
                            {contact.first_name} {contact.last_name}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{' '}
                </h1>

                {contact.email && (
                    <p>
                        <a target="_blank" href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>
                    </p>
                )}

                {contact.description && <p>{contact.description}</p>}

                <div>
                    <button
                        className="delete"
                        onClick={() => {
                            deleteContactMutation.mutate(contactId);
                            history.push('/');
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
