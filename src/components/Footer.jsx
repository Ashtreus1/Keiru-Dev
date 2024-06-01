import socialLinks from '@/config/links';  

export const Footer = () => {
    return (
        <footer className="border-t border-cyan-500">
            <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col lg:flex-row items-center">
                    <h2 className="text-2xl font-bold">Keiru Dev</h2>
                    <p className="ml-2 text-lg">Made with ❤️ and ☕</p>
                </div>
                <div className="mt-6 lg:mt-0">
                    <h6 className="text-lg font-semibold">Follow me on</h6>
                    <div className="flex space-x-4 mt-2 ">
                        {socialLinks.map((link) => (
                            <a key={link.id} href={link.url} className="text-lg">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Keiru Dev. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
