/*
    Assignment 5
    Yuxuan Liu 0752597
*/

$(document).ready(function(){
    // your code here

    class ContentCard {
        id;
        title;
        description;
        category;

        constructor(id, title, description, category){
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
        }

        updateContent() {
            if(this.title != null || this.description != null || this.category != null ) {
                return this.title, this.description, this.category;
            }
        }

        toString(){
            return `<div id= "content-${this.id}"><h4>${this.title}</h4><br><p>Description: ${this.description}</p><br><div>Category: ${this.category}</div></div><br>`;
            
        }
        

    }
    


    let ContentCards = [
        {
            id: 0,
            title: "Sekiro",
            description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Sekiro as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.",
            category: "Action"
        },

        {
            id: 1,
            title: "Fatal Frame",
            description: "Fatal Frame: Maiden of Black Water is a survival horror video game developed by Koei Tecmo. The fifth main entry in the Fatal Frame series, it was originally published by Nintendo for the Wii U in Japan in September 2014 and worldwide in October 2015.",
            category: "Action"
        },

        {
            id: 2,
            title: "Fallout4",
            description: "Fallout 4 is an action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth main game in the Fallout series and was released worldwide on November 10, 2015, for Microsoft Windows, PlayStation 4 and Xbox One",
            category: "RPG"
        },

        {
            id: 3,
            title: "Overwatch",
            description: "Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a hero shooter, Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as heroes, with unique abilities.",
            category: "FPS"
        },

        {
            id: 4,
            title: "Resident Evil 3",
            description: "Resident Evil 3 is a 2020 survival horror video game developed and published by Capcom. Released for Microsoft Windows, PlayStation 4, and Xbox One, it is a remake of the 1999 game Resident Evil 3: Nemesis.",
            category: "Survival Horror"
        }
    ]

    let array = [];

    for(i= 0; i< ContentCards.length; i++){
        array[i] = new ContentCard(ContentCards[i].id, 
                                ContentCards[i].title, 
                                ContentCards[i].description, 
                                ContentCards[i].category);
    }

    
    $('#content-list').append("Games:<br><br>");

    for(i=0; i<array.length; i++) {
        $('#content-list').append("" + array[i]);
        $(`#content-${i}`).css({"border": "solid", "padding":"5px"});
    }
    


});


