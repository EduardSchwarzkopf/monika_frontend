import { ArrowUpIcon } from "@chakra-ui/icons";
import { Tag } from "@chakra-ui/react";

export default function RedArrowUpTag() {
    return (
        <Tag size="lg" borderRadius="full" variant="subtle" colorScheme="red">
            <ArrowUpIcon />
        </Tag>
    );
}
