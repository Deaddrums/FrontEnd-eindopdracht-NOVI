import { ERROR_MESSAGES } from "./../ErrorMessages/ErrorMessages.jsx";

export function getFeedbackMessage(errorOrCode) {

    if (typeof errorOrCode === "string") {
        return ERROR_MESSAGES[errorOrCode] || ERROR_MESSAGES.UNKNOWN_ERROR;
    }

    if (!errorOrCode) {
        return ERROR_MESSAGES.UNKNOWN_ERROR;
    }

    if (!errorOrCode.response) {
        return ERROR_MESSAGES.NETWORK_ERROR;
    }

    const status = errorOrCode.response.status;

    if (status === 401) {
        return ERROR_MESSAGES.UNAUTHORIZED;
    }

    if (status === 403) {
        return ERROR_MESSAGES.FORBIDDEN;
    }

    if (status === 404) {
        return ERROR_MESSAGES.NOT_FOUND;
    }

    if (status >= 500) {
        return ERROR_MESSAGES.SERVER_ERROR;
    }

    return ERROR_MESSAGES.UNKNOWN_ERROR;
}