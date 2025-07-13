import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

const GetStarted = () => {
    return (
        <div className="flex w-full h-screen overflow-hidden bg-white">
            {/* Sidebar — with custom scrollbar */}
            <aside className="xl:w-[20%] w-[75%] bg-slate-900 border-r border-gray-200 h-full overflow-y-auto sidebar-scrollbar">
                <Menu />
            </aside>

            {/* Main */}
            <div className="flex flex-col flex-1 min-h-screen">
                <main className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex-grow p-6 bg-gradient-to-tr from-gray-50 to-white scrollbar-thin scrollbar-thumb-emerald-400 hover:scrollbar-thumb-emerald-600 transition-all">
                        <Outlet />
                    </div>
                    <footer className="bg-white border-t border-gray-200 shadow-inner">
                        <Footer />
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default GetStarted
