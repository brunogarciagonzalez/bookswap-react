export function parseBookObj(obj, isbn){
    // the isbn is a separate arg because it is the ISBN inputted by user.
    // the API may return both ISBN-10 & ISBN-13, but if it does not then
    // the user-inputted ISBN can be used to fill in that gap.
    let title = obj.title;
    let bookUrl = obj.url;
    let coverUrl = obj.cover.large ? obj.cover.large : obj.cover.medium ? obj.cover.medium : obj.cover.small;
    let authorsString = parseAuthorsIntoString(obj.authors);
    let identifiers = parseIdentifiers(obj.identifiers, isbn);
    let authors = parseAuthors(obj.authors);
    return { title, bookUrl, coverUrl, authorsString, identifiers, authors };
}

function parseAuthorsIntoString(arrayOfAuthorObjs){
    // TODO: backend -- add Author table and join to books
    // Author info: https://openlibrary.org/authors/OL6403658A.json
    return arrayOfAuthorObjs.map(author => author.name).join(", ")
}

function parseAuthors(arrayOfAuthorObjs){
    // TODO: keep author name and author OLid (via parser)
    return arrayOfAuthorObjs.map(obj => { 
       return { name: obj.name, openLibraryID: parseOLid(obj.url) }
    })
}

function parseOLid(url){
    return url.split("/")[4]
}

function parseIdentifiers(identifiersObj, userISBN){
    // the isbn is a separate arg because it is the ISBN inputted by user.
    // the API may return both ISBN-10 & ISBN-13, but if it does not then
    // the user-inputted ISBN can be used to fill in that gap.
    let userInputType = userISBN.length;
    let output = {};

    if (identifiersObj.isbn_13){
        output["ISBN-13"] = identifiersObj.isbn_13[0];
    } else if (userInputType === 13){
        output["ISBN-13"] = userISBN;
    }
    
    if (identifiersObj.isbn_10){
        output["ISBN-10"] = identifiersObj.isbn_10[0];
    } else if (userInputType === 10){
        output["ISBN-10"] = userISBN;
    }
   
    return output
}