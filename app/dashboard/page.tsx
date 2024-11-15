import Image from "next/image";

const MusicPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className=" text-black py-20"
                style=
                {{
                    backgroundImage: `url('/images/MarketingBG.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold m-4">Amplify your music authencity, visit <a href="http://localhost:3000" target="_blank" className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">spotify
                         </a></h1>
                    <p className="text-xl mb-8">Stream millions of songs and podcasts, anytime, anywhere.</p>
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
                        Start Listening Free
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                              <Image src="/images/Audio Waves.png" alt="audio waves" width={60} height={60} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">High Quality Audio</h3>
                            <p className="text-gray-600">Experience crystal clear sound with our HD streaming quality</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                                <Image src="/images/offline.png" alt="offline" width={100} height={100} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Offline Mode</h3>
                            <p className="text-gray-600">Download your favorite tracks and listen offline</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                            <Image src="/images/video-file.png" alt="files" width={60} height={60} />

                            </div>
                            <h3 className="text-xl font-bold mb-2">Smart Playlists</h3>
                            <p className="text-gray-600">Personalized playlists based on your taste</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold mb-4">Free</h3>
                            <p className="text-gray-600 mb-6">Perfect for casual listeners</p>
                            <p className="text-4xl font-bold mb-6">$0</p>
                            <ul className="mb-6 space-y-2">
                                <li>✓ Ad-supported listening</li>
                                <li>✓ Basic audio quality</li>
                                <li>✓ Shuffle play</li>
                            </ul>
                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
                    <p className="text-gray-600 mb-8">Join millions of happy listeners today.</p>
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700">
                        Download Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MusicPage;