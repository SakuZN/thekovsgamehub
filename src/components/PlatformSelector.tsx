import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platforms} from "../hooks/usePlatforms.ts";

interface PSProps{
    onSelect: (platform: Platforms) => void
    selectedPlatform: Platforms | null
}

const PlatformSelector = ({onSelect, selectedPlatform}: PSProps) => {
    const {data, error} = usePlatforms()
    if (error) return null
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown/>}
            >
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.map((platform) =>
                <MenuItem
                    key={platform.id}
                    onClick={() => onSelect(platform)}
                >
                    {platform.name}
                </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}
export default PlatformSelector
