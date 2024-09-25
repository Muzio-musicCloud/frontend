import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        try {
            setLoading(true);
            const userData = await api.login(credentials);
            setUser(userData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        // 초기 사용자 상태 확인 (예: 로컬 스토리지에서)
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            setUser(savedUser);
        }
        setLoading(false);
    }, []);

    return { user, loading, error, login, logout };
};

export default useAuth;