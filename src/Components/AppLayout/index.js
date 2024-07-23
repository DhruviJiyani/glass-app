import React from 'react'

function AppLayout({children}) {
    return (
        <div className="h-screen">
            <div className="h-full overflow-x-hidden">
                <Header />
                <main
                    className={`bg-gray-mercury scrollbar-gutter relative top-14 h-[calc(100%_-_5rem)] overflow-y-auto px-5 py-4 md:top-20`}
                >
                    {children}
                </main>
            <Footer />
            </div>
        </div>
    );
}

export default AppLayout