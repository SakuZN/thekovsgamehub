import {GamePlatform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaLinux,
    FaApple,
    FaAndroid
} from "react-icons/fa";

import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

interface PILProps {
    platforms: GamePlatform[]
}

const PlatformIconlist = ( {platforms}: PILProps) => {

    const iconMap : {[key:string]:IconType} = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        linux: FaLinux,
        android: FaAndroid,
        mac: FaApple,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios: MdPhoneIphone
    }
    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform) =>
                <Icon as={iconMap[platform.slug]} color='gray.500' />
            )}
        </HStack>
    )
}
export default PlatformIconlist
