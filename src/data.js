import registrarIcon from "./assets/tools/registrar-icon.png";
import healthcareIcon from "./assets/tools/healthcare-icon.png";
import taxIcon from "./assets/tools/tax-icon.png";
import taxUtilityIcon from "./assets/tools/tax-utility-icon.png";
import generalUtilityIcon from "./assets/tools/general-utility-icon.png";

export const connectors = [
    {
        name: "Registrar Services",
        downloadUrl:
            "https://github.com/Een-heel-gave-organisatie/registrar-services/releases/download/v1.0.1/registrar_api-1.0.0.zip",
        description: "Registrar Services provides domain registration and management services.",
        imageUrl: registrarIcon,
        type: "service",
    },
    {
        name: "Healthcare Services",
        downloadUrl:
            "https://github.com/Een-heel-gave-organisatie/healthcare-services/releases/download/v1.0.1/healthcare_immunization_registry_api-1.0.0.zip",
        description: "Healthcare Services provides medical and health-related services.",
        imageUrl: healthcareIcon,
        type: "service",
    },
    {
        name: "Tax Services",
        downloadUrl:
            "https://github.com/Een-heel-gave-organisatie/tax-services/releases/download/v1.0.0/tax_api-1.0.0.zip",
        description: "Tax Services provides tax preparation and filing services.",
        imageUrl: taxIcon,
        type: "service",
    },
    {
        name: "Tax Utilities",
        downloadUrl:
            "https://github.com/Een-heel-gave-organisatie/tax-utilities/releases/download/v2.0.4/tax-connector-2.0.2-SNAPSHOT.zip",
        description: "Tax Utilities provides tax-related tools and resources.",
        imageUrl: taxUtilityIcon,
        type: "utility",
    },
    {
        name: "General Utilities",
        downloadUrl:
            "https://github.com/Een-heel-gave-organisatie/utility-module/releases/download/v2.0.4/utility-connector-2.0.2-SNAPSHOT.zip",
        description: "General Utilities provides a variety of tools and resources.",
        imageUrl: generalUtilityIcon,
        type: "utility",
    },
];
