'use client'
import Image from 'next/image'
import {Autocomplete, Box, TextField, Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {Video, videos} from '@/data/videos';
import {Line, lines} from '@/data/lines';
import {useState} from "react";
import {GoodOrBad} from "@/components/GoodOrBad";

let lineIdOfTheDay = Math.floor(new Date().getTime() / 86400000) % 7
let lineOfTheDay = lines[lineIdOfTheDay]
if (typeof window !== 'undefined') {
  localStorage.setItem("answers", "[]");
}

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
        <main className="flex min-h-screen flex-col items-center space-around p-24">
            <div className='header'>
              <Image
                  className='img'
                  src={`/image/ozludle2.png`}
                  width={300}
                  height={122}
                  alt="Video thumbnail"
              />
            </div>
            <div className="line">
                <a>&quot;{lineOfTheDay.text}&quot;</a>
            </div>
            <div className='container'>
                <Autocomplete
                    className='completebox'
                    disablePortal
                    options={videos}
                    getOptionLabel={(option) => option.name}
                    sx={{width: 425}}
                    onChange={(event, value) => setVideo(value)}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                            <Image
                                className='img'
                                src={`/image/${option.thumbnail}`}
                                width={32}
                                height={32}
                                alt="Video thumbnail"
                            />
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) =>
                        <TextField {...params} label="Video" style={{color:'white'}}/>
                    }
                />
                <Button sx={{backgroundColor:'#af97ff'}} className='guessBtn' variant="contained" endIcon={<SendIcon />} onClick={() => handleOnClick()}>Guess</Button>

                <div>

                  <div className='flex flex-line gap-2 ozheaders'>
                    <div className="flex">
                      <div>
                        <a>Thumbnail</a>
                      </div>
                      <hr/>
                    </div>
                    <div className="flex">
                      <div>
                        <a>Champion</a>
                      </div>
                      <hr/>
                    </div>
                    <div className="flex">
                      <div>
                        <a>Video type</a>
                      </div>
                      <hr/>
                    </div>
                    <div className="flex">
                      <div>
                        <a>Has winscreen</a>
                      </div>
                      <hr/>
                    </div>
                    <div className="flex">
                      <div>
                        <a>Rating</a>
                      </div>
                      <hr/>
                    </div>
                    <div className="flex">
                      <div>
                        <a>Release year</a>
                      </div>
                      <hr/>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                      {fails.map((fail) => {
                          return <GoodOrBad key={fail.id} numid={fail.id} line={fail.line} videoSelect={fail.videoSelect}/>
                      })}
                  </div>
                  <div className="windiv"></div>
                </div>
            </div>
        </main>
    )
}
