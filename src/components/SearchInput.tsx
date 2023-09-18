import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {useRef} from "react";

interface Props {
    onSearch: (search: string) => void
}
const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSearch(ref.current?.value || '')
        }}>
            <InputGroup>
                <InputLeftElement children={<BiSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder='Search KovieGames....' variant='filled'/>
            </InputGroup>
        </form>
    )
}
export default SearchInput
