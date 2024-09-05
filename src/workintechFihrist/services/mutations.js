import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewContact } from './api';

export function useAddNewContact() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => addNewContact(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['contacts', 'list'] });
        },
    });
}

export function useDeleteContact() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteContact(id),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['contacts', 'list'] });
            await queryClient.invalidateQueries({
                queryKey: ['contacts', 'details', id],
            });
        },
    });
}
