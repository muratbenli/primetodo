import React, {createContext, useState} from 'react';

const PrimeTodoContext = createContext(null);

export const PrimeTodoProvider = ({children}) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Create todo application.",
            completed: true
        },
        {
            id: 2,
            text: "Create Readme.md",
            completed: false
        }
    ]);
    const values = {
        todos,
        setTodos,
        activeFilter,
        setActiveFilter
    };
    return <PrimeTodoContext.Provider value={values}>{children}</PrimeTodoContext.Provider>
};

export default PrimeTodoContext;