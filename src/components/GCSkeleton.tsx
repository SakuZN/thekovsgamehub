import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GcSkeleton = () => {
    return (
        <Card width={'275px'}  borderRadius={10} overflow='hidden'>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </CardBody>
        </Card>
    )
}
export default GcSkeleton
