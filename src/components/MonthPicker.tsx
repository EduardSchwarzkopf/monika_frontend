import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.scss";
import { getDateFromCookie, setDateCookie } from "../utils/CookieUtil";

export const MonthPicker = () => {
    const currentDate = getDateFromCookie();
    const [startDate, setStartDate] = useState(currentDate);

    const handleChange = (date: Date) => {
        setStartDate(date);
        setDateCookie(date);
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
