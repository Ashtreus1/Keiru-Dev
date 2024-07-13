export const Footer = () => {
    return (
        <footer className="shadow-lg shadow-cyan-500">
            <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col lg:flex-row items-center">
                    <h2 className="text-2xl font-bold">Keiru Dev</h2>
                    <p className="ml-2 text-lg">Made with ❤️ and ☕</p>
                </div>
                <div className="mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Keiru Dev. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
