export const ERROR_MESSAGES = {

    PREFERENCES_SAVE_SUCCESS: {
        type: "success",
        message: "Je voorkeuren zijn succesvol opgeslagen!",
    },

    LOGIN_SUCCESS: {
        type: "success",
        message: "Je bent succesvol ingelogd."
    },

    REGISTER_SUCCESS: {
        type: "success",
        message: "Je account is succesvol aangemaakt.",
    },

    REGISTER_FAILED: {
        type: "error",
        message: "Het aanmaken van je account is mislukt.",
    },

    PREFERENCES_SAVE_FAILED: {
        type: "error",
        message: "Je voorkeuren konden niet worden opgeslagen.",
    },

    USER_NOT_LOGGED_IN: {
        type: "error",
        message: "Je moet ingelogd zijn om deze actie uit te voeren.",
    },

    NETWORK_ERROR: {
        type: "error",
        message: "Er is geen verbinding met de server. Controleer je internetverbinding.",
    },

    UNAUTHORIZED: {
        type: "error",
        message: "Je sessie is verlopen. Log opnieuw in.",
    },

    FORBIDDEN: {
        type: "error",
        message: "Je hebt geen rechten om deze actie uit te voeren.",
    },

    NOT_FOUND: {
        type: "error",
        message: "De gevraagde data kon niet worden gevonden.",
    },

    SERVER_ERROR: {
        type: "error",
        message: "Er ging iets mis op de server. Probeer het later opnieuw.",
    },

    UNKNOWN_ERROR: {
        type: "error",
        message: "Er ging iets onverwachts mis.",
    },
};