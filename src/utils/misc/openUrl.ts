export default function openUrl(url: string, openInNewTab = true) {
    if (openInNewTab) {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    } else {
        window.location.href = url;
    }
}
