import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.scss";
import { getDateFromCookie, setDateCookie } from "../utils/CookieUtil";

type MonthPickerProps = {
    onChange?: () => void;
};

export const MonthPicker = (props: MonthPickerProps) => {
    const currentDate = getDateFromCookie();
    const [startDate, setStartDate] = useState(currentDate);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (date: Date) => {
        setIsOpen(!isOpen);
        setStartDate(date);
        setDateCookie(date);
        if (props.onChange) {
            props.onChange();
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <Box mb={4}>
            <Box>
                <Button
                    rightIcon={<CalendarIcon />}
                    colorScheme="teal"
                    onClick={handleClick}
                >
                    {startDate.toLocaleString("de-DE", {
                        year: "numeric",
                        month: "short",
                    })}
                </Button>
            </Box>
            {isOpen && (
                <DatePicker
                    selected={startDate}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    onChange={(date: Date) => handleChange(date)}
                    inline
                />
            )}
        </Box>
    );
};
