import { ArrowDownIcon } from "@chakra-ui/icons";
import { Tag } from "@chakra-ui/react";

export default function GreenArrowDownTag() {
    return (
        <Tag size="lg" borderRadius="full" variant="subtle" colorScheme="green">
            <ArrowDownIcon />
        </Tag>
    );
}
