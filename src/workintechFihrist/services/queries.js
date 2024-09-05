import { useQuery } from '@tanstack/react-query';
import { getContactDetails, getContacts } from './api';

export function useContacts() {
    return useQuery({ queryKey: ['contacts', 'list'], queryFn: getContacts });
}

export function useContactDetais(id) {
    return useQuery({
        queryKey: ['contacts', 'detail', id],
        queryFn: () => getContactDetails(id),
    });
}
