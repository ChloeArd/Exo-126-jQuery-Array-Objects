
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

let index = 0;

let objPerson = $("#persons")
let listPersons = $("#listPersons");
objPerson.css({
    "display" : "flex",
    "justify-content" : "center",
    "align-items" : "center",
    "flex-direction" : "column"
});

listPersons.css({
    "display" : "flex",
    "justify-content" : "center",
    "align-items" : "center",
    "flex-direction" : "column"
});

function listPerso(){
    $.each(arrObj, function(index, value) {
        //Afficher la propriété age pour chaque objet contenu dans mon tableau
        listPersons.append("<img src =" + value.avatar +" alt='imageAvatar'>");
        listPersons.append("<p>" + value.person + "<span>(" + value.age + ")</span></p>");
    });
}
// Affiche tous les personnages garce a la boucle
$("#allPersons").click(function () {
    listPerso();
})

//Affiche le 1er perso du tableau
$("#image").attr("src", arrObj[0].avatar);
$("#name").html(arrObj[0].person);
$("#age").html("(" + arrObj[0].age + ")");

//Quand on clique sur "<" on, les perso précédent s'affichent
$("#previous").click(function () {
    if(index === 0){
        index = arrObj.length - 1; //car sinon c'est 3
    }
    else {
        index --;
    }
    //affichae des perso en fonction de son index
    $("#image").attr("src", arrObj[index].avatar);
    $("#name").html(arrObj[index].person);
    $("#age").html("(" + arrObj[index].age + ")");
});

//pareil sauf que c'est quand on clique sur ">" alors ca affiche les perso suivants
$("#next").click(function () {
    if(index === arrObj.length - 1){
        index = 0
    }
    else {
        index ++;
    }
    $("#image").attr("src", arrObj[index].avatar);
    $("#name").html(arrObj[index].person);
    $("#age").html("(" + arrObj[index].age + ")");
})
