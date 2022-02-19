import Image from "next/image";

function Header() {
    return (
        <header className="flex justify-between flex-col p-5 pt-20 max-w-7xl mx-auto text-center space-y-10">
            <div className="flex flex-col space-y-4">
                <h1>The ultimate <br />
                    <span className="text-indigo-600">Project Management</span><br />
                    tool for developers</h1>
                <h2 className="max-w-4xl mx-auto">Projecto lets you create in-app experiences that onboard, guide, and educate your developers - without coding.</h2>
                <div className="flex space-x-4 mx-auto">
                    <button className="btn">Get Started</button>
                    <button className="border-2 border-indigo-600 font-Poppins font-semibold text-gray-800 px-4 py-2 rounded-md">Request a Demo</button>
                </div>
            </div>
            <div className="h-96 w-full relative mx-auto">                {/* "relative" is required; adjust sizes to your liking */}
                <Image
                    src="/temp-saas1.png"
                    alt="Temporary technology image"
                    layout="fill"
                    objectFit="contain"
                    className=""
                />
            </div>
        </header >
    )
}

export default Header;