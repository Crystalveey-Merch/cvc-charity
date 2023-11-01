import React from 'react'

export const SectionTwo = () => {
    const supports = [
        {
            id: 1,
            title: "Our mode",
            description: "Our mode of operation is deeply rooted in compassion and care. We embrace a flexible and empathetic approach to ensure we can assist those in need during their most challenging times.",
        },
        {
            id: 2,
            title: "Our focus",
            description: "Our unwavering focus is on improving the lives of individuals and communities in need. We work tirelessly to provide essential resources, support, and hope to those who require it the most.",
        },
        {
            id: 3,
            title: "Our impact",
            description: "Our impact can be measured in the smiles we bring, the lives we transform, and the communities we uplift. We're dedicated to leaving a positive, lasting mark on the world through our charitable initiatives.",
        }
    ];

    return (
        <div className="h-10">
            <ul className='flex gap-2'>
                {supports.map((support) => (
                    <li key={support.id}>
                        {support.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}