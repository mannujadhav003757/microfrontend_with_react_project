import { mount } from "dashboard/DashboardApp"
import React, { useRef, useEffect } from 'react';
export default function DashboardApp({onSignIN}) {
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current)
    },[])
    return <div ref={ref}></div>
}