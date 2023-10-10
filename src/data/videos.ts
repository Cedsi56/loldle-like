export type Video = {
    id: number,
    name: string,
    thumbnail: string,
    champion: string,
    year: number,
    winscreen: boolean,
    rating: number | null
}

export const videos: Video[] = [
    {
        id : 0,
        name : "Video1aaaa",
        thumbnail : "moneyshot.png",
        champion : "Caitlyn",
        year : 2022,
        winscreen : true,
        rating : 5
    },
    {
        id : 1,
        name : "Video2bbbb",
        thumbnail : "aplucian.png",
        champion : "Lucian",
        year : 2023,
        winscreen : true,
        rating : null
    }
]