export const LISTEDEN_CIKAR = "LISTEDEN_CIKAR"
export const LISTEYE_EKLE = "LISTEYE_EKLE"
export const ONCEKI_FILM = "ONCEKI_FILM"
export const SONRAKI_FILM = "SONRAKI_FILM"

export function listedenCikar(id) {
    return { type: LISTEDEN_CIKAR, payload: id }
}

export function listeyeEkle() {
    return { type: LISTEYE_EKLE }
}

export function oncekiFilm() {
    return { type: ONCEKI_FILM }
}

export function sonrakiFilm() {
    return { type: SONRAKI_FILM }
}
