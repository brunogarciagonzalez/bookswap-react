export function parseBookObj(obj, isbn){
    // the isbn is a separate arg because it is the ISBN inputted by user.
    // the API may return both ISBN-10 & ISBN-13, but if it does not then
    // the user-inputted ISBN can be used to fill in that gap.
    let title = obj.title;
    let url = obj.url;
    let cover = obj.cover.large ? obj.cover.large : obj.cover.medium ? obj.cover.medium : obj.cover.small;
    let authors = parseAuthors(obj.authors);
    let identifiers = parseIdentifiers(obj.identifiers, isbn);

    debugger
}

function parseAuthors(arrayOfAuthorObjs){
    // TODO: keep author name and author OLid (via parser)
    // TODO: backend -- add Author table and join to books
    return arrayOfAuthorObjs.map(author => author.name).join(", ")
}

function parseIdentifiers(arrayOfIdentifierObjs, isbn){
    // the isbn is a separate arg because it is the ISBN inputted by user.
    // the API may return both ISBN-10 & ISBN-13, but if it does not then
    // the user-inputted ISBN can be used to fill in that gap.

}