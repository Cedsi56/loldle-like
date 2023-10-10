import {Card} from "@/components/Card";
import {Line} from "@/data/lines";
import {Video} from "@/data/videos";

type Props = {
    line: Line,
    videoSelect: Video
}

export const GoodOrBad = ({}: Props) => {
    /*
        TODO: implement
        Card red or green
     */

    return <div className={"flex gap-2"}>
        <Card color="red">
        </Card>
        <Card color="green" delay="0.5s">
        </Card>
        <Card color="green" delay="1s">
        </Card>
        <Card color="green" delay="1.5s">
        </Card>
    </div>
}