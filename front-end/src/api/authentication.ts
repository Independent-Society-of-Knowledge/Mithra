export const signup = async (email: string, password: string) => {
    try {
        const response = await fetch('https://your-api-endpoint.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Signup failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
};

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch('https://your-api-endpoint.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};