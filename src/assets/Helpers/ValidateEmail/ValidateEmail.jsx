function ValidateEmail(email) {

    if (!email || email.length < 4) {
        return "";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (email.includes(" ")) {
        return "lpRed";
    }

    if (email.includes("..")) {
        return "lpRed";
    }

    if (!emailRegex.test(email)) {
        return "lpRed";
    }

    return "lpGreen";
}

export default ValidateEmail;
