import React from 'react'
import {
    mainMenu, getStarted, layout, flexGrid, spacing, sizing,
    typography, backgrounds, borders, effects, filters,
    tables, transitions, transforms, interactivity
} from './MenuData'

const sections = [
    { title: "Main Menu", data: mainMenu },
    { title: "Get Started", data: getStarted },
    { title: "Layout", data: layout },
    { title: "Flex & Grid", data: flexGrid },
    { title: "Spacing", data: spacing },
    { title: "Sizing", data: sizing },
    { title: "Typography", data: typography },
    { title: "Backgrounds", data: backgrounds },
    { title: "Borders", data: borders },
    { title: "Effects", data: effects },
    { title: "Filters", data: filters },
    { title: "Tables", data: tables },
    { title: "Transitions & Animation", data: transitions },
    { title: "Transforms", data: transforms },
    { title: "Interactivity", data: interactivity },
]

const Menu = () => {
    return (
        <aside className="min-h-screen w-full max-w-sm mx-auto bg-white py-10 px-6 border-r border-slate-200">
            <nav className="space-y-10">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                            {section.title}
                        </h3>
                        <ul className="space-y-1">
                            {section.data.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.link}
                                        className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
                                    >
                                        <span className="text-base text-purple-500 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </span>
                                        <span className="text-sm text-slate-700 group-hover:text-purple-700">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    )
}

export default Menu
