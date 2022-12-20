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

    const handleChange = (date: Date) => {
        setStartDate(date);
        setDateCookie(date);
        if (props.onChange) {
            props.onChange();
        }
    };

    return (
        <DatePicker
            wrapperClassName="datePicker"
            selected={startDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            onChange={(date: Date) => handleChange(date)}
        />
    );
};
