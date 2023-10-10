'use client'
import Image from 'next/image'
import { Autocomplete, Box, TextField } from '@mui/material'
import champions from './data/videos.json';
import lines from './data/lines.json';


const line_of_the_day = lines[0]


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <a>{line_of_the_day.text}</a>
      </div>
      <div>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={champions}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
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
              <TextField {...params} label="Video" />
            }
          />
        <button>Guess</button>
      </div>
    </main>
  )
}
