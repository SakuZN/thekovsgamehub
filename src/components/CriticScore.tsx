import {Badge} from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}:Props) => {
    let color: string;
    if(score >= 75) {
        color = "green";
    } else if(score >= 50) {
        color = "yellow";
    } else {
        color = "red";
    }
    return (
        <Badge
            fontSize={'14px'}
            paddingX={2}
            borderRadius={'4px'}
            colorScheme={color}
        >
            {score}
        </Badge>
    )
}
export default CriticScore
