export default function dashboard(){
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div
                className="bg-gradient-to-b from-indigo-700 to-purple-800 text-indigo-100 flex-shrink-0 w-64 px-8 py-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">My Profile</h2>
                </div>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition duration-300"
                            >
                                <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition duration-300"
                            >
                                <i className="fas fa-cog mr-2"></i> Settings
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white transition duration-300"
                            >
                                <i className="fas fa-credit-card mr-2"></i> Billing
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Profile Picture"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-600">
                            <i className="fas fa-envelope mr-2"></i> john.doe@example.com
                        </p>
                        <p className="text-gray-600">
                            <i className="fas fa-phone mr-2"></i> (123) 456-7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
                        <ul className="list-disc pl-4">
                            <li className="text-green-600">
                                <i className="fas fa-check-circle mr-2"></i> Updated profile picture
                            </li>
                            <li className="text-yellow-600">
                                <i className="fas fa-lock mr-2"></i> Changed password
                            </li>
                            <li className="text-blue-600">
                                <i className="fas fa-envelope mr-2"></i> Subscribed to newsletter
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}