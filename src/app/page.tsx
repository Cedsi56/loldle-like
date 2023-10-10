'use client'
import Image from 'next/image'
import {Autocomplete, Box, TextField} from '@mui/material'
import {Video, videos} from '@/data/videos';
import {Line, lines} from '@/data/lines';
import {useState} from "react";
import {GoodOrBad} from "@/components/GoodOrBad";

const lineOfTheDay = lines[0]

export default function Home() {
    const [video, setVideo] = useState<Video | null>(null);
    const [failId, setFailId] = useState(0);

    const [fails, setFails] = useState<{
        id: number
        line: Line,
        videoSelect: Video
    }[]>([]);

    const handleOnClick = () => {
        if (video === null) {
            return
        }
        setFails([...fails, {
            id: failId,
            line: lineOfTheDay,
            videoSelect: video
        }])
        setFailId(failId + 1)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <a>{lineOfTheDay.text}</a>
            </div>
            <div>
                <Autocomplete
                    disablePortal
                    options={videos}
                    getOptionLabel={(option) => option.name}
                    sx={{width: 300}}
                    onChange={(event, value) => setVideo(value)}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                            <Image
                                className='img'
                                src={`/image/${option.thumbnail}`}
                                width={32}
                                height={32}
                                alt="Picture of the author"
                            />
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) =>
                        <TextField {...params} label="Video"/>
                    }
                />
                <button onClick={() => handleOnClick()}>Guess</button>

                <div className="flex flex-col gap-4">
                    {fails.map((fail) => {
                        return <GoodOrBad key={fail.id} line={fail.line} videoSelect={fail.videoSelect}/>
                    })}
                </div>
            </div>
        </main>
    )
}
