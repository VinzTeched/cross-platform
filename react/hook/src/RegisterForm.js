import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState({firstName: 'Luke', lastName: 'Jones', email: 'lukesjones@example.com'});
    return (
        <>
            <label>First name: <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value})}} /> </label>
            <label>Last name: <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value})}} /> </label>
        </>
    )
}