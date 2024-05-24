import projects from '@/assets/content/projects'

export const getProject = (projectName:string) => {

    //const initiative = initiatives.find(item => item.title === initiativeName)
    // check if the regular initiitive name is used
    //then check if the path version of the initiative name is used

    let project = projects.find(item => item.name === projectName || toPath(item.name) === projectName);

    return project;
}

export default getProject;


export function toPath(text:string) {
    let finalString = text.toLowerCase().replaceAll(" ", "-");
    return finalString;
}

export function undoPath(path:string) {
    // Remove the leading slash
    if (path.startsWith('/')) {
        path = path.substring(1);
    }
    // Replace hyphens with spaces
    let originalString = path.replaceAll("-", " ");
    // Capitalize the first word
    originalString = originalString.charAt(0).toUpperCase() + originalString.slice(1);
    // Return the resulting string
    return originalString;
}