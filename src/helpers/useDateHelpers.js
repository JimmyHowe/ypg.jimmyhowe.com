export function useDateHelpers() {

    return {
        toHumanReadable
    }
}

export function toHumanReadable(iso) {

    try {
        return new Date(iso).toDateString();
    } catch (e) {
        console.log(e.message);
    }
}