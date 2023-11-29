function generate(){
    var quotes = {
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',

        "- Alysha Speer" : '“You never really know what is coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',

        "- Aaron Lauritsen" : '“The struggles we endure today will be the good old days we laugh about tomorrow.”' 



    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]

    document.getElementById("quote").innerHTML = quote
    document.getElementById("author").innerHTML = author
}