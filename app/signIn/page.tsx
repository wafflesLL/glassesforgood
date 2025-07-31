
export default function SignIn() {
    return(
        <>
            <div className="body flex flex-col justify-center items-center py-16">
                <h1 className="text-7xl font-extrabold ">Sign In</h1>
                <div className="flex flex-col items-left">
                    <p className="">Email</p>
                    <input type="email" className="border-2 border-black rounded px-4 py-2 mb-4" placeholder="Enter your email" />
                </div>
                <div>
                    <p className="">Password</p>
                    <input type="password" className="border-2 border-black rounded px-4 py-2" placeholder="Enter your password" />
                </div>
            </div>
        </>

    );
};