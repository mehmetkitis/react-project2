import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContacts } from '../services/queries';

export default function W4SideBar() {
    const { data: contacts, isPending, error } = useContacts();
    if (isPending) return 'loading';
    if (error) return 'an error occured...';

    return (
        <div>
            <h1>WiTech Contacts</h1>
            <div>
                <Link to="/contacts/new">
                    <button type="submit">New</button>
                </Link>
                <Link to="/fihrist">
                    <button type="submit">Home</button>
                </Link>
            </div>
            <nav>
                {contacts.length ? (
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <NavLink
                                    to={`/contacts/${contact.id}`}
                                    data-testid="contact"
                                    className={({ isActive, isPending }) =>
                                        isActive ? 'active' : isPending ? 'pending' : ''
                                    }
                                >
                                    {contact.first_name || contact.last_name ? (
                                        <>
                                            {contact.first_name} {contact.last_name}
                                        </>
                                    ) : (
                                        <i>No Name</i>
                                    )}{' '}
                                    {contact.favorite && <span>★</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        <i>No contacts</i>
                    </p>
                )}
            </nav>
        </div>
    );
}
