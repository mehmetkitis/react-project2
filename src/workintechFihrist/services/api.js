import axios from 'axios';

export const getContacts = async () => {
    let data = [];
    await axios
        .get('https://65b36193770d43aba479a2f2.mockapi.io/users')
        .then((res) => {
            data = res.data;
        });
    return data;
};

export const getContactDetails = async (id) => {
    let data = {};
    if (!id) return data;
    await axios
        .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${id}`)
        .then((res) => {
            data = res.data;
        });
    return data;
};

export const addNewContact = async (payload) => {
    let data = {};

    await axios
        .post('https://65b36193770d43aba479a2f2.mockapi.io/users', payload)
        .then((res) => {
            data = res.data;
        });
    return data;
};

export const deleteContact = async (id) => {
    let data = {};

    await axios
        .delete(`https://65b36193770d43aba479a2f2.mockapi.io/users/${id}`)
        .then((res) => {
            data = res.data;
        });
    return data;
};
