import useData from "./useData.ts";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const UsePlatforms = () => useData<Platforms>('/platforms/lists/parents')
export default UsePlatforms
