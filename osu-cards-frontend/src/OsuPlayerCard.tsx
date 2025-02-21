import React from "react";

interface OsuPlayerCardProps {
    username: string;
    avatar: string;
    rank: number;
    pp: number;
    accuracy: number;
}

const OsuPlayerCard: React.FC<OsuPlayerCardProps> = ({
    username,
    avatar,
    rank,
    pp,
    accuracy,
}) => {
    return (
        <div className="relative w-72 h-96 bg-gradient-to-br from-purple-600 to-blue-500 p-1 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            {/* Card Container */}
            <div className="bg-gray-900 text-white rounded-xl p-6 h-full">
                {/* Avatar */}
                <div className="flex justify-center relative">
                    <img
                        src={avatar}
                        alt={`${username}'s avatar`}
                        className="w-full h-32 object-cover rounded-lg border-4 border-white"
                    />
                </div>

                {/* Player Info */}
                <h2 className="text-xl font-bold text-center mt-4">
                    {username}
                </h2>

                {/* Stats */}
                <div className="mt-4 space-y-2 text-center">
                    <p className="text-lg">
                        <span className="font-semibold">Rank:</span> #{rank}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">
                            Performance Points:
                        </span>{" "}
                        {pp}pp
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Accuracy:</span>{" "}
                        {accuracy}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OsuPlayerCard;
