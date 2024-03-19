"use client"

import { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'

// Types for ActionContextProvider properties
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

// Types for ActiveSectionContext, SectionName was already declared in another file; go to file path to see more.
type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

// create a Context that components can provide or read.
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({ 
    children 
}: ActiveSectionContextProviderProps) {

    // Defining state with Home as default value, the <SectionName> isn't really important but I put it there just to be precise
    // Because I use static data for this project
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    //State to detect when was the last time a user clicked on a button with 0 as default value
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return <ActiveSectionContext.Provider 
    value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>{children}</ActiveSectionContext.Provider>
}

export function useActiveSectionContext() {

    // Using the context that has created above
    const context = useContext(ActiveSectionContext)

    // Checking if the context variable is null or not
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context
}

export default ActiveSectionContextProvider