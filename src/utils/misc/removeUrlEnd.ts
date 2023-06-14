export default function removeUrlEnd() {
    const { protocol, host, pathname } = window.location;
    const pathParts = pathname.split("/");
    pathParts.pop();
    const newPath = pathParts.join("/");
    return `${protocol}//${host}${newPath}`;
}
