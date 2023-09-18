import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Prop {
    onSelect: (order: string) => void
    selectedOrder: string
}

const SortSelector = ({onSelect, selectedOrder} : Prop) => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Recently Added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Rating'},

    ]

    const currentOrder = sortOrder.find((order) => order.value === selectedOrder)
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown/>}
            >
                Order By: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map((order) =>
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelect(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}
export default SortSelector
