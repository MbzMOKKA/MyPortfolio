export default function openUrl(url: string, openInNewTab = true) {
    const newWindow = window.open(
        url,
        openInNewTab ? "_blank" : undefined,
        "noopener,noreferrer"
    );
    if (newWindow) {
        newWindow.opener = null;
    }
}
