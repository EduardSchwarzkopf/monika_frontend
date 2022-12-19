const dateCookieName = "dateCookie";

export const setCookie = (
    cookieName: string,
    cookieValue: string,
    daysExpire: number,
    subdomainAccess = false
): void => {
    var d = new Date();
    d.setTime(d.getTime() + daysExpire * 24 * 60 * 60 * 1000);
    let domainUrl = "";
    if (subdomainAccess && process.env.NODE_ENV === "production") {
        domainUrl = "domain=" + window.location.host;
    }
    document.cookie = `${cookieName}=${cookieValue};expires=${d.toUTCString()};${domainUrl};path="/";SameSite=Lax`;
};

export const getCookie = (cookieName: string): string => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

export const setDateCookie = (
    localDate: Date = new Date(),
    expires: number = 30
): void => {
    setCookie(dateCookieName, localDate.toUTCString(), expires);
};

export const getDateFromCookie = (): Date => {
    const dateCookie = getCookie(dateCookieName);
    if (dateCookie) {
        return new Date(dateCookie);
    }
    const now = new Date();
    setDateCookie(now);

    return now;
};
