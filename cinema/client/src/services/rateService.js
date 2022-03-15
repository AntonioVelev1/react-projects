const API_URL = 'http://localhost:3030/api/rates';

export const getRate = async (data) => {
    try {
        let res = await fetch(`${API_URL}/getRate`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ data })
        });

        let result = await res.json();

        if (res.ok) {
            return result
        }
    }
    catch (err) {
        return err;
    }
}