import {Card} from "@/components/Card";
import {Line} from "@/data/lines";
import {Video, videos} from "@/data/videos";
import Image from 'next/image'
import {doWin} from '@/app/page'

type Props = {
    key: number,
    numid: number,
    line: Line,
    videoSelect: Video
}

export const GoodOrBad = (prop: Props) => {
    let colors:string[] = [];
    let ls:string|null = localStorage.getItem("answers")
    let lsactual:string;
    if (ls == null){
        lsactual = "[]";
    } else {
        lsactual = ls;
    }
    let curr = JSON.parse(lsactual);

    curr.splice(prop.numid)
    
    if (prop.line.video == prop.videoSelect.id) {
        // everything is good
        colors = ["green", "green", "green", "green", "green"]

        curr.push(colors)

        localStorage.setItem("answers", JSON.stringify(curr))

        // todo : handle winning
        doWin(prop.numid);
    } else {
        // get the right video
        let v:Video|undefined = videos.find((vid) => vid.id == prop.line.video);
        if (v == undefined) {
            // what the fuck ?
        } else {
            if (JSON.stringify(v.champion) == JSON.stringify(prop.videoSelect.champion)){
                colors.push("green");
            } else {
                let isFound = v.champion.some( champ => prop.videoSelect.champion.includes(champ))
                || prop.videoSelect.champion.some( champ => v.champion.includes(champ));
                if (isFound) {
                    colors.push("yellow");
                } else {
                    colors.push("red");
                }
            }
            
            colors.push(v.type == prop.videoSelect.type ? "green" : "red");
            colors.push(v.winscreen == prop.videoSelect.winscreen ? "green" : "red");

            // rating can be number or null, and we want to know if it's higher or lower
            if (v.rating == null){
                colors.push(prop.videoSelect.rating == null ? "green" : "red");
            } else {
                if (prop.videoSelect.rating == null) {
                    colors.push("red");
                } else {
                    if (v.rating > prop.videoSelect.rating){
                        colors.push("yellow-over");
                    } else if (v.rating < prop.videoSelect.rating) {
                        colors.push("yellow-under");
                    } else {
                        colors.push("green");
                    }
                }
            }

            // we want to know if year is higher or lower
            if (v.year > prop.videoSelect.year){
                colors.push("yellow-over");
            } else if (v.year < prop.videoSelect.year) {
                colors.push("yellow-under");
            } else {
                colors.push("green");
            }

        }

        curr.push(colors)

        localStorage.setItem("answers", JSON.stringify(curr))
    }

    return <div className={"flex gap-2"}>
        <div className="thmbnail">
            <Image
                className='img'
                src={`/image/${prop.videoSelect.thumbnail}`}
                width={80}
                height={80}
                alt="Video thumbnail"
            />
        </div>
        <Card color={colors[0]} text={JSON.stringify(prop.videoSelect.champion).replaceAll("\"", "").replaceAll("[", "").replaceAll("]", "").replaceAll(",", ", ")}>
        </Card>
        <Card color={colors[1]} text={prop.videoSelect.type} delay="0.5s">
        </Card>
        <Card color={colors[2]} text={prop.videoSelect.winscreen ? "Yes" : "No"} delay="1s">
        </Card>
        <Card color={colors[3]} text={prop.videoSelect.rating == null ? "No rating" : String(prop.videoSelect.rating)} delay="1.5s">
        </Card>
        <Card color={colors[4]} text={String(prop.videoSelect.year)} delay="2s">
        </Card>
    </div>
}