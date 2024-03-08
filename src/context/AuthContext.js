"use client"

import { apiLogin, apiLogout } from "@/actions/user";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = async (email, senha) => {
        const res = await apiLogin(email, senha);

        if (res?.erro) return res;

        setUser({
            email
        })
    }

    const logout = () => {
        apiLogout();
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}