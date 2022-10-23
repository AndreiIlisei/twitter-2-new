import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='col-span-2 px-2 mt-2 hidden lg:inline'>
            {/* Search Bar */}
            <div className="flex items-center space-x-2 bg-gray-100 p-3 mt-2 rounded-full">
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input type="text" placeholder="Search Twitter" className="flex-1 outline-none bg-transparent" />
            </div>

            {/* Twitter Timeline */}
            <div>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="KinoClothes"
                    options={{ height: 1000 }}
                />

            </div>
        </div>

    )
}

export default Widgets