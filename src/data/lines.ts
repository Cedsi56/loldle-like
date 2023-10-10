export type Line = {
    id: number;
    text: string;
    audio: string;
    video: number;
}

export const lines: Line[] = [
    {
        id : 0,
        text : "Line1",
        audio : "line1.mp3",
        video : 1
    },
    {
        id : 1,
        text : "Line2",
        audio : "line2.mp3",
        video : 0
    }
]