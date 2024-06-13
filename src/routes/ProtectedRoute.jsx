import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function ProtectedRoute(){
    const auth = useAuth()

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/" />;
}

