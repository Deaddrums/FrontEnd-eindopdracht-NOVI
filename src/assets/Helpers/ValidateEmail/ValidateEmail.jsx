function ValidateEmail(email) {

    if (!email) {
        return "";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailRegex.test(email) ||
        email.includes("..")
    ) {
        return "lpRed";
    }

    return "lpGreen";
}

export default ValidateEmail;