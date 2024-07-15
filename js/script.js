var qoute = [
    { 
        qoute:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,
        Auther : "--Helen Keller"
    },

    {qoute:"You don't have to be great to start, but you have to start to be great.",
         Auther  : "--Zig Ziglar"
    },

    { qoute :"An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.",
         Auther : "--Charles Bukowski"
    },
    
    { qoute:"Being first in the search result organically in Google is the dream of all website owners.",
        Auther : "--Dr. Chris Dayagdag"
    },
    { qoute:"Getting a quality website is not an expenses but rather an investment.",
        Auther : "--Dr. Christopher Dayagdag"
    },
    { qoute:"Great web design without functionality is like a sports car with no engine.",
        Auther : "--Paul Cookson"
    },
    { qoute:"Websites promote you 24/7: No employee will do that.",
        Auther : "Paul Cookson"
    },
]

function getQuote(){
    var num = Math.floor(Math.random()*qoute.length)
    console.log(num)
    document.getElementById("quote").innerHTML =qoute[num].qoute;
    document.getElementById("auther").innerHTML =qoute[num].Auther;
}