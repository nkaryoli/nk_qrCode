import { UserProfile } from '@clerk/clerk-react';

const UserSettings = () => {
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center  p-6 lg:p-9 xl:p-14">
            <UserProfile
                appearance={{
                    variables: {
                        colorPrimary: '#3b0764', // Purple color
                        colorText: '#4b4b4b', // Gray text
                        colorBackground: '#f7fafc', // Light background
                    },
                    elements: {
                        cardBox: '!w-full !max-w-[100%] shadow-lg shadow-purple-700/10 border rounded-md',
                        rootBox: '!w-full m-0 lg:m-0',
                        footer: 'hidden',
                        navbar: 'bg-gradient-to-t from-white to-white',
                        scrollBox: 'bg-gradient-to-tl from-purple-100 to-white',
                        navbarMobileMenuRow: 'bg-gradient-to-t from-white to-white ',
                        actionCard: 'bg-white shadow-none border border-purple-200',
                        headerTitle: 'text-lg text-purple-950',
                        navbarMobileMenuButton: 'text-purple-950 ',
                        navbarButton: 'hover:bg-purple-50 hover:text-purple-950 focus:bg-purple-200',
                    },
                }}
            />
        </div>
    );
};

export default UserSettings;
