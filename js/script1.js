//--------------------------------------Variables---------------------------------------------------------
let headerShow = true;
let nbrTeams = 0;
let playerList = [];
let teamList = [];
let teamListCopie = [];
let playersDisplay = false;
let teamsDisplay = false;
let test = [];
let tirageAuSort = [];
let classement = new Array;


let TableauFinalLocker = 0;
let tableauSecondaireLocker = 0;

//---------------------Team 16----------------------------------------

teamList = [
    [35, 'Ronaldo', 'Desaily', 1],
    [124, 'Zidane', 'Jordan', 2],
    [31, 'Karembeu', 'Pippen', 3],
    [48, 'Petit', 'Ronaldo', 4],
    [80, 'Figo', 'Pastore', 5],
    [122, 'Mbappe', 'Messi', 6],
    [58, 'Vieira', 'Thuram', 7],
    [54, 'Desaily', 'Blanc', 8],
    [87, 'Neymar', 'Cavani', 9],
    [137, 'Kante', 'Ibrahimovic', 10],
    [4, 'Kurzawa', 'Payet', 11],
    [59, 'Giroud', 'Benzema', 12],
    [164, 'Cavani', 'Marquinos', 13],
    [79, 'Kimpenbe', 'Icardi', 14],
    [83, 'Adli', 'Emana', 15],
    [197, 'Rivaldo', 'Cantona', 16]];
teamListCopie = [[35, 'Ronaldo', 'Desaily', 1],
[124, 'Zidane', 'Jordan', 2],
[31, 'Karembeu', 'Pippen', 3],
[48, 'Petit', 'Ronaldo', 4],
[80, 'Figo', 'Pastore', 5],
[122, 'Mbappe', 'Messi', 6],
[58, 'Vieira', 'Thuram', 7],
[54, 'Desaily', 'Blanc', 8],
[87, 'Neymar', 'Cavani', 9],
[137, 'Kante', 'Ibrahimovic', 10],
[4, 'Kurzawa', 'Payet', 11],
[59, 'Giroud', 'Benzema', 12],
[164, 'Cavani', 'Marquinos', 13],
[79, 'Kimpenbe', 'Icardi', 14],
[83, 'Adli', 'Emana', 15],
[197, 'Rivaldo', 'Cantona', 16]];
//---------------------Team 12----------------------------------------
// teamList = [
//     [35, 'Ronaldo', 'Desaily', 1],
//     [124, 'Zidane', 'Jordan', 2],
//     [31, 'Karembeu', 'Pippen', 3],
//     [48, 'Petit', 'Ronaldo', 4],
//     [80, 'Figo', 'Pastore', 5],
//     [122, 'Mbappe', 'Messi', 6],
//     [58, 'Vieira', 'Thuram', 7],
//     [54, 'Desaily', 'Blanc', 8],
//     [87, 'Neymar', 'Cavani', 9],
//     [137, 'Kante', 'Ibrahimovic', 10],
//     [4, 'Kurzawa', 'Payet', 11],
//     [59, 'Giroud', 'Benzema', 12]];
    
// teamListCopie = [[35, 'Ronaldo', 'Desaily', 1],
// [124, 'Zidane', 'Jordan', 2],
// [31, 'Karembeu', 'Pippen', 3],
// [48, 'Petit', 'Ronaldo', 4],
// [80, 'Figo', 'Pastore', 5],
// [122, 'Mbappe', 'Messi', 6],
// [58, 'Vieira', 'Thuram', 7],
// [54, 'Desaily', 'Blanc', 8],
// [87, 'Neymar', 'Cavani', 9],
// [137, 'Kante', 'Ibrahimovic', 10],
// [4, 'Kurzawa', 'Payet', 11],
// [59, 'Giroud', 'Benzema', 12]];
//--------------------------------------/Variables/---------------------------------------------------------




//--------------------------------------Chargement de la page---------------------------------------------------------
function loading() {
    document.getElementById('choixTournoi').style.display = 'none';
    document.getElementById('Feuil1').style.display = 'none';
    document.getElementById('Equipes').style.display = 'none';
    document.getElementById('Joueurs').style.display = 'none';
    document.getElementById('TableauFinal').style.display = 'none';
    document.getElementById('Tableau Secondaire').style.display = 'none';
    document.getElementById('Classement').style.display = 'none';
    document.getElementById('tableau16Equipes').style.display = 'none';
    document.getElementById('tableau12Equipes').style.display = 'none';
}
//--------------------------------------/Chargement de la page/---------------------------------------------------------




//--------------------------------------Header---------------------------------------------------------
function display(ID) {
    var x = document.getElementById(ID);
    if (x.style.display == "none") {
        document.getElementById('choixTournoi').style.display = 'none';
        document.getElementById('Feuil1').style.display = 'none';
        document.getElementById('Equipes').style.display = 'none';
        document.getElementById('Joueurs').style.display = 'none';
        document.getElementById('TableauFinal').style.display = 'none';
        document.getElementById('Tableau Secondaire').style.display = 'none';
        document.getElementById('Classement').style.display = 'none';
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function hide() {
    if (headerShow === true) {
        document.getElementById('navMenu').style.display = 'none';
        headerShow = false;
    } else {
        document.getElementById('navMenu').style.display = 'block';
        headerShow = true;
    }
}
function headerButtonsColorChange(Type) {
    document.getElementById('hchoixTournoi').style.borderColor = 'black';
    document.getElementById('hchoixTournoi').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hJoueurs').style.borderColor = 'black';
    document.getElementById('hJoueurs').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hEquipes').style.borderColor = 'black';
    document.getElementById('hEquipes').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hFeuil1').style.borderColor = 'black';
    document.getElementById('hFeuil1').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hTableauFinal').style.borderColor = 'black';
    document.getElementById('hTableauFinal').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hTableauSecondaire').style.borderColor = 'black';
    document.getElementById('hTableauSecondaire').style.backgroundColor = 'rgb(87, 18, 18)';
    document.getElementById('hClassement').style.borderColor = 'black';
    document.getElementById('hClassement').style.backgroundColor = 'rgb(87, 18, 18)';

    document.getElementById(Type).style.borderColor = 'white';
    document.getElementById(Type).style.backgroundColor = 'red';


}
//--------------------------------------/Header/---------------------------------------------------------

// ----------------------------------------Classement---------------------------------------------------------
function LoadClassement(x) {
    display(x);
    if (nbrTeams == 0) {
        alert('Selection un type de tournoi !');

    } else {
        classemenT();
    }
}
function classemenT() {
    document.getElementById('RankingTable').innerHTML = '';
    let head = document.createElement('tr');
    let rankH = document.createElement('th');
    rankH.appendChild(document.createTextNode('Classement'));
    let teamH = document.createElement('th');
    teamH.appendChild(document.createTextNode('Equipes'));
    head.appendChild(rankH);
    head.appendChild(teamH);
    document.getElementById('RankingTable').appendChild(head);
    for (let i = 0; i < nbrTeams; i++) {
        let newDiv = document.createElement('tr');

        let rank = document.createElement('td');
        rank.appendChild(document.createTextNode((i + 1)));
        let team = document.createElement('td');
        team.appendChild(document.createTextNode(classement[i]));

        newDiv.appendChild(rank);
        newDiv.appendChild(team);

        document.getElementById('RankingTable').appendChild(newDiv);
    }

}
// ----------------------------------------Classement---------------------------------------------------------


//--------------------------------------Choix Tournoi---------------------------------------------------------
function selectPlayers(TeamNbr, Type) {
    playersDisplay = false;
    document.getElementById('ClasseSeize').style.borderColor = 'black';
    document.getElementById('ClasseSeize').style.backgroundColor = 'rgb(87,18,18)';
    document.getElementById('loisirSeize').style.borderColor = 'black';
    document.getElementById('loisirSeize').style.backgroundColor = 'rgb(87,18,18)';
    document.getElementById('ClasseDouze').style.borderColor = 'black';
    document.getElementById('ClasseDouze').style.backgroundColor = 'rgb(87,18,18)';
    document.getElementById('loisirDouze').style.borderColor = 'black';
    document.getElementById('loisirDouze').style.backgroundColor = 'rgb(87,18,18)';

    document.getElementById(Type).style.borderColor = 'white';
    document.getElementById(Type).style.backgroundColor = 'red';

    document.getElementById('tournoi').innerHTML = Type;
    nbrTeams = TeamNbr;
    TableauFinalLocker = 0;
    changeCSS('style'+nbrTeams+'.css', 0);
}
//--------------------------------------/Choix Tournoi/---------------------------------------------------------




//--------------------------------------Choix Joueurs---------------------------------------------------------
function LoadJoueurs(x) {
    display(x);
    if (nbrTeams == 0) {
        alert('Selection un type de tournoi !');

    } else if (playersDisplay == false) {
        displayPlayersInputs();
    }
}
function displayPlayersInputs() { // Ajouter classe ou loisir dans les parameter
    if (nbrTeams == 0) {
        alert('Selection un type de tournoi !');

    }
    nbrPlayer = nbrTeams * 2;
    // document.getElementById('selectPlayers').innerHTML=''; A voir car ca efface tt
    document.getElementById('selectPlayers').innerHTML = '';
    for (let i = 1; i < (nbrTeams * 2) + 1; i++) {

        let newDiv = document.createElement('div');

        let playerNameToAdd = document.createElement('input');
        playerNameToAdd.setAttribute('placeholder', 'player' + i + 'Name');
        playerNameToAdd.setAttribute('id', 'player' + i + 'Name');
        playerNameToAdd.setAttribute('required', 'required');


        let playerNicknameToAdd = document.createElement('input');
        playerNicknameToAdd.setAttribute('placeholder', 'player' + i + 'Nickname');
        playerNicknameToAdd.setAttribute('id', 'player' + i + 'Nickname');
        playerNicknameToAdd.setAttribute('required', 'required');


        let playerWeightToAdd = document.createElement('input');
        playerWeightToAdd.setAttribute('type', 'number');
        playerWeightToAdd.setAttribute('required', 'required');
        playerWeightToAdd.setAttribute('placeholder', 'player' + i + 'Weight');
        playerWeightToAdd.setAttribute('id', 'player' + i + 'Weight');



        newDiv.appendChild(playerNameToAdd);
        newDiv.appendChild(playerNicknameToAdd);
        newDiv.appendChild(playerWeightToAdd);

        newDiv.setAttribute('id', 'J');
        document.getElementById('selectPlayers').appendChild(newDiv);
        playersDisplay = true;


    }


}
function editPlayers() {
    playerList = [];
    teamsDisplay = false;
    for (let i = 1; i < (nbrTeams * 2) + 1; i++) {
        let name = document.getElementById('player' + i + 'Name').value;
        let nickname = document.getElementById('player' + i + 'Nickname').value;
        let weight = document.getElementById('player' + i + 'Weight').value;

        let player = [name, nickname, weight];
        let count = playerList.push(player);

    }
}
//--------------------------------------/Choix Joueurs/---------------------------------------------------------




//--------------------------------------Choix Equipes---------------------------------------------------------
function LoadEquipes(x) {
    display(x);
    if (playerList == []) {
        alert('Selection toute les équipes !');

    } else if (teamsDisplay == false) {
        selectTeams();
    }
}
function selectTeams() { //Comme pour les joueurs ajouter boutton pour actualiser la liste des equipes et afficher les poids!


    for (let j = 1; j < nbrTeams + 1; j++) {

        let team = document.createElement('div');
        team.setAttribute('id', 'team' + j);

        let container1 = document.createElement('div');
        container1.setAttribute('class', 'custom-select');
        container1.setAttribute('style', 'width:200px');

        let container2 = document.createElement('div');
        container2.setAttribute('class', 'custom-select');
        container2.setAttribute('style', 'width:200px');

        let player1 = document.createElement('select');
        player1.setAttribute('id', 'player1Team' + j);
        player1.setAttribute('data-live-search', 'true');
        // player1.setAttribute('onclick', 'test2(this.value)');//https://ricardometring.com/getting-the-value-of-a-select-in-javascript
        let player2 = document.createElement('select');
        player2.setAttribute('id', 'player2Team' + j);
        player2.setAttribute('data-live-search', 'true');

        // player2.setAttribute('onclick', 'test2(this.value)');

        let defaultPlayer1 = document.createElement('option');
        defaultPlayer1.appendChild(document.createTextNode('--Select a player--'));
        let defaultPlayer2 = document.createElement('option');
        defaultPlayer2.appendChild(document.createTextNode('--Select a player--'));

        player1.appendChild(defaultPlayer1);
        player2.appendChild(defaultPlayer2);


        for (let k = 0; k < nbrTeams * 2; k++) {
            let listOfPlayers = document.createElement('option');
            listOfPlayers.setAttribute('id', 'player' + k);
            listOfPlayers.setAttribute('value', playerList[k][0]);
            let player = document.createTextNode(playerList[k][0]);
            listOfPlayers.appendChild(player);

            let listOfPlayersCopie = document.createElement('option');
            listOfPlayersCopie.setAttribute('id', 'player' + k);
            listOfPlayersCopie.setAttribute('value', playerList[k][0]);
            let playerCopie = document.createTextNode(playerList[k][0]);
            listOfPlayersCopie.appendChild(playerCopie);

            player1.appendChild(listOfPlayers);
            player2.appendChild(listOfPlayersCopie);

        }
        let ekip = document.createElement('p');
        ekip.setAttribute('id', 'ekip' + j);
        let ekipWeigh = document.createTextNode('Equipe ' + j);
        ekip.appendChild(ekipWeigh);

        let teamWeight = document.createElement('p');
        teamWeight.setAttribute('id', 'teamWeight' + j);
        teamWeight.appendChild(document.createTextNode(''));

        let player1Weight = document.createElement('p');
        player1Weight.setAttribute('id', 'player1WeightFromTeam' + j);
        player1Weight.appendChild(document.createTextNode(''));

        let player2Weight = document.createElement('p');
        player2Weight.setAttribute('id', 'player2WeightFromTeam' + j);
        player2Weight.appendChild(document.createTextNode(''));

        container1.appendChild(player1);
        container2.appendChild(player2);

        team.appendChild(ekip);
        team.appendChild(teamWeight);
        team.appendChild(container1);
        team.appendChild(player1Weight);
        team.appendChild(container2);
        team.appendChild(player2Weight);

        document.getElementById('ChoixDesEquipes').appendChild(team);

    }
    teamsDisplay = true;

}
function editTeams() {
    teamList = [];

    for (let i = 1; i < nbrTeams + 1; i++) {
        let test = false;
        let player1 = document.getElementById('player1Team' + i).value;
        let player2 = document.getElementById('player2Team' + i).value;
        let player1Weight = 0;
        let player2Weight = 0;



        for (let j = 0; j < nbrTeams * 2; j++) {
            if (player1 == playerList[j][0]) {
                player1Weight = playerList[j][2];

            }
            else if (player2 == playerList[j][0]) {
                ('test');
                player2Weight = playerList[j][2];

            }

        }

        document.getElementById('player1WeightFromTeam' + i).appendChild(document.createTextNode(player1Weight));
        document.getElementById('player2WeightFromTeam' + i).appendChild(document.createTextNode(player2Weight));
        document.getElementById('teamWeight' + i).appendChild(document.createTextNode(parseInt(player1Weight) + parseInt(player2Weight)));

        let team = [(parseInt(player1Weight) + parseInt(player2Weight)), player1, player2, i];
        let teamCopie = [(parseInt(player1Weight) + parseInt(player2Weight)), player1, player2, i];
        let count = teamList.push(team);
        let countCopie = teamListCopie.push(teamCopie);



    }
    // teamList=tri(teamList);

}
function tri(tab) {
    let tabTmp = tab;
    let tmp, j;
    for (let i = 0; i < tab.length; i++) {
        tmp = tab[i];
        for (j = i; j > 0 && tab[j - 1][0] > tmp[0]; j--) {
            tab[j] = tab[j - 1];

        }
        tab[j] = tmp;
    }
    return tabTmp;
}
//--------------------------------------/Choix Equipes/---------------------------------------------------------




//--------------------------------------Feuil 1---------------------------------------------------------
function LoadFeuil1(x) {
    display(x);
    if (teamList == []) {
        alert('Selectionné les équipes !');
    } else {
        feuil1();
    }
}
function feuil1() {
    document.getElementById('firstTable').innerHTML = '';
    document.getElementById('SecondTable').innerHTML = '';

    let head = document.createElement('tr');
    let teamH = document.createElement('th');
    teamH.appendChild(document.createTextNode(' '));
    let weight = document.createElement('th');
    weight.appendChild(document.createTextNode('Poids'));
    let teamRang = document.createElement('th');
    teamRang.appendChild(document.createTextNode('Rang'));
    head.appendChild(teamH);
    head.appendChild(weight);
    head.appendChild(teamRang);
    document.getElementById('firstTable').appendChild(head);

    let rankList = tri(teamListCopie);
    for (let i = 0; i < nbrTeams; i++) {//First table
        let newRow = document.createElement('tr');

        let team = document.createElement('td');
        let weight = document.createElement('td');
        let rank = document.createElement('td');
        let temp = 'Equipe ' + (parseInt(i) + parseInt(1));
        rank.setAttribute('id', temp);

        team.appendChild(document.createTextNode('Equipe ' + (parseInt(i) + parseInt(1))));
        weight.appendChild(document.createTextNode(teamList[i][0]));
        rank.appendChild(document.createTextNode('Calculer le classement'));


        newRow.appendChild(team);
        newRow.appendChild(weight);
        newRow.appendChild(rank);

        document.getElementById('firstTable').appendChild(newRow);
    }
    for (let j = 0; j < nbrTeams; j++) {
        let newRow = document.createElement('tr');

        let rank = document.createElement('td');
        let team = document.createElement('td');
        let players = document.createElement('td');
        let temp = 'T' + (parseInt(j) + parseInt(1));
        rank.appendChild(document.createTextNode(temp));
        team.appendChild(document.createTextNode('Equipe ' + rankList[j][3]));
        players.appendChild(document.createTextNode(rankList[j][1] + ' / ' + rankList[j][2]));

        document.getElementById('Equipe ' + rankList[j][3]).innerHTML = temp;

        newRow.appendChild(rank);
        newRow.appendChild(team);
        newRow.appendChild(players);


        document.getElementById('SecondTable').appendChild(newRow);

    }

}
function essai() {//Adapter tournoi a 16
    let rankList = tri(teamListCopie);

    const rand = Math.random(2);
    if (rand == 0) {

        const cinq = rankList[2];
        const onze = rankList[3];
    } else {
        const cinq = rankList[3];
        const onze = rankList[2];
    }

    tirageAuSort.push(rankList[1]);
    tirageAuSort.push(rankList[4]);
    tirageAuSort.push(rankList[5]);
    tirageAuSort.push(rankList[6]);
    tirageAuSort.push(rankList[7]);
    tirageAuSort.push(rankList[2]);//
    tirageAuSort.push(rankList[8]);
    tirageAuSort.push(rankList[9]);
    tirageAuSort.push(rankList[10]);
    tirageAuSort.push(rankList[11]);
    tirageAuSort.push(rankList[12]);
    tirageAuSort.push(rankList[3]);//
    tirageAuSort.push(rankList[13]);
    tirageAuSort.push(rankList[14]);
    tirageAuSort.push(rankList[15]);
    tirageAuSort.push(rankList[0]);




}
//--------------------------------------/Feuil 1/---------------------------------------------------------
///Math.floor(a/b) Division rntiere
//--------------------------------------Tableau Final---------------------------------------------------------

function LoadTableauFinal(x) {
    display(x);
    if (teamList == [] || nbrTeams == 0) {
        alert('Selectionné les équipes !');
    } else if (TableauFinalLocker == 1) {
    } else if (nbrTeams == 16) {
        TableauFinalLocker = 1;
        finalBoardCreationSeize();
    } else if (nbrTeams == 12){
        TableauFinalLocker = 1;
        finalBoardCreationDouze();
    }
}
function LoadTableauSecondaire(x) {
    display(x);
    if (tableauSecondaireLocker == 1) {
        if (teamList == [] || nbrTeams == 0) {
            alert('Selectionné les équipes !');
        } else if (tableauSecondaireLocker == 1) {
        } else if (nbrTeams == 16) {
            tableauSecondaireLocker = 1;
            secondaireBoardCreationSeize();
        } else if (nbrTeams == 12){
            tableauSecondaireLocker = 1;
            secondaireBoardCreationDouze();
        }
    }
}
function secondaireBoardCreationDouze() {
    document.getElementById('Tableau Secondaire').style.display = 'flex';

    

    const branch9 = document.createElement('div');
    branch9.setAttribute('class', 'Branch_9');
    for (let i = 0; i < nbrTeams / 8; i++) {
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_82');

        const objet3 = document.createElement('div');
        objet3.setAttribute('class', 'Object_82');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'STeamDemie1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('value', 0);
        result11.setAttribute('id', 'SResultDemie11' + i);
        result11.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result12.setAttribute('id', 'SResultDemie12' + i);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result13.setAttribute('id', 'SResultDemie13' + i);
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'SScoreDemie1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'STeamDemie2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result21.setAttribute('id', 'SResultDemie21' + i);
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result22.setAttribute('id', 'SResultDemie22' + i);
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result23.setAttribute('id', 'SResultDemie23' + i);
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'SScoreDemie2' + i);
        score2.append(document.createTextNode('0'));



        objet3.append(team1, result11, result12, result13, score1);
        objet3.append(team2, result21, result22, result23, score2);

        match.append(objet3);
        branch9.append(match);

    }


    let branch10 = document.createElement('div');
    branch10.setAttribute('class', 'Branch_10');
    let match = document.createElement('div');
    match.setAttribute('class', 'Match_83');

    let objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_83');

    // --------------------------First team-----------------------------
    const team1 = document.createElement('span');
    team1.setAttribute('class', 'Name');
    team1.setAttribute('id', 'STeamFinal10');
    team1.append(document.createTextNode('9eme Place'));

    const result11 = document.createElement('input');
    result11.setAttribute('type', 'number');
    result11.setAttribute('class', 'Result');
    result11.setAttribute('id', 'SResultFinal110');
    result11.setAttribute('value', 0);
    result11.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result12 = document.createElement('input');
    result12.setAttribute('type', 'number');
    result12.setAttribute('class', 'Result');
    result12.setAttribute('id', 'SResultFinal120');
    result12.setAttribute('value', 0);
    result12.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result13 = document.createElement('input');
    result13.setAttribute('type', 'number');
    result13.setAttribute('class', 'Result');
    result13.setAttribute('id', 'SResultFinal130');
    result13.setAttribute('value', 0);
    result13.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const score1 = document.createElement('span');
    score1.setAttribute('class', 'Score');
    score1.setAttribute('id', 'SScoreFinal10');
    score1.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team2 = document.createElement('span');
    team2.setAttribute('class', 'Name');
    team2.setAttribute('id', 'STeamFinal20');
    team2.append(document.createTextNode('10eme Place'));

    const result21 = document.createElement('input');
    result21.setAttribute('type', 'number');
    result21.setAttribute('class', 'Result');
    result21.setAttribute('id', 'SResultFinal210');
    result21.setAttribute('value', 0);
    result21.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result22 = document.createElement('input');
    result22.setAttribute('type', 'number');
    result22.setAttribute('class', 'Result');
    result22.setAttribute('id', 'SResultFinal220');
    result22.setAttribute('value', 0);
    result22.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result23 = document.createElement('input');
    result23.setAttribute('type', 'number');
    result23.setAttribute('class', 'Result');
    result23.setAttribute('id', 'SResultFinal230');
    result23.setAttribute('value', 0);
    result23.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const score2 = document.createElement('span');
    score2.setAttribute('class', 'Score');
    score2.setAttribute('id', 'SScoreFinal20');
    score2.append(document.createTextNode('0'));
    // --------------------------End team-----------------------------

    objet4.append(team1, result11, result12, result13, score1);
    objet4.append(team2, result21, result22, result23, score2);

    match.append(objet4);
    branch10.append(match);
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    match = document.createElement('div');
    match.setAttribute('class', 'Match_83');

    objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_83');

    // --------------------------First team-----------------------------
    const team3 = document.createElement('span');
    team3.setAttribute('class', 'Name');
    team3.setAttribute('id', 'STeamFinal11');
    team3.append(document.createTextNode('11eme Place'));

    const result31 = document.createElement('input');
    result31.setAttribute('type', 'number');
    result31.setAttribute('class', 'ResultTest');
    result31.setAttribute('id', 'SResultFinal111');
    result31.setAttribute('value', 0);
    result31.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result32 = document.createElement('input');
    result32.setAttribute('type', 'number');
    result32.setAttribute('class', 'ResultTest');
    result32.setAttribute('id', 'SResultFinal121');
    result32.setAttribute('value', 0);
    result32.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result33 = document.createElement('input');
    result33.setAttribute('type', 'number');
    result33.setAttribute('class', 'ResultTest');
    result33.setAttribute('id', 'SResultFinal131');
    result33.setAttribute('value', 0);
    result33.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const score3 = document.createElement('span');
    score3.setAttribute('class', 'ScoreTest');
    score3.setAttribute('id', 'SScoreFinal11');
    score3.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team4 = document.createElement('span');
    team4.setAttribute('class', 'Name');
    team4.setAttribute('id', 'STeamFinal21');
    team4.append(document.createTextNode('12 Places'));

    const result41 = document.createElement('input');
    result41.setAttribute('type', 'number');
    result41.setAttribute('class', 'ResultTest');
    result41.setAttribute('id', 'SResultFinal211');
    result41.setAttribute('value', 0);
    result41.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result42 = document.createElement('input');
    result42.setAttribute('type', 'number');
    result42.setAttribute('class', 'ResultTest');
    result42.setAttribute('id', 'SResultFinal221');
    result42.setAttribute('value', 0);
    result42.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result43 = document.createElement('input');
    result43.setAttribute('type', 'number');
    result43.setAttribute('class', 'ResultTest');
    result43.setAttribute('id', 'SResultFinal231');
    result43.setAttribute('value', 0);
    result43.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const score4 = document.createElement('span');
    score4.setAttribute('class', 'ScoreTest');
    score4.setAttribute('id', 'SScoreFinal21');
    score4.append(document.createTextNode('0'));

    objet4.append(team3, result31, result32, result33, score3);
    objet4.append(team4, result41, result42, result43, score4);

    match.append(objet4);
    branch10.append(match);
    // --------------------------End team-----------------------------
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000



    document.getElementById('tableauSecondaire').append(branch9);
    document.getElementById('tableauSecondaire').append(branch10);
    document.getElementById('SperdantQuart').style.display = 'none';
    document.getElementById('SperdantperdantQuart').style.display = 'none';


}
function secondaireBoardCreationSeize() {
    document.getElementById('Tableau Secondaire').style.display = 'flex';

    const branch8 = document.createElement('div');
    branch8.setAttribute('class', 'Branch_8');
    for (let i = 0; i < 4; i++) {
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_81');

        const objet2 = document.createElement('div');
        objet2.setAttribute('class', 'Object_81');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'STeamQuart1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('id', 'SResultQuart11' + i);
        result11.setAttribute('value', 0);
        result11.setAttribute('onclick', 'myFunction6(0,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('id', 'SResultQuart12' + i);
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction6(0,' + i + ')');
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('id', 'SResultQuart13' + i);
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction6(0,' + i + ')');
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'SScoreQuart1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'STeamQuart2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('id', 'SResultQuart21' + i);
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction6(0,' + i + ')');
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('id', 'SResultQuart22' + i);
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction6(0,' + i + ')');
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('id', 'SResultQuart23' + i);
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(0,' + i + ')');
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'SScoreQuart2' + i);
        score2.append(document.createTextNode('0'));



        objet2.append(team1, result11, result12, result13, score1);
        objet2.append(team2, result21, result22, result23, score2);

        match.append(objet2);
        branch8.append(match);

    }

    const branch9 = document.createElement('div');
    branch9.setAttribute('class', 'Branch_9');
    for (let i = 0; i < nbrTeams / 8; i++) {
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_82');

        const objet3 = document.createElement('div');
        objet3.setAttribute('class', 'Object_82');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'STeamDemie1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('value', 0);
        result11.setAttribute('id', 'SResultDemie11' + i);
        result11.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result12.setAttribute('id', 'SResultDemie12' + i);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result13.setAttribute('id', 'SResultDemie13' + i);
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'SScoreDemie1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'STeamDemie2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result21.setAttribute('id', 'SResultDemie21' + i);
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result22.setAttribute('id', 'SResultDemie22' + i);
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction6(1,' + i + ')');
        result23.setAttribute('id', 'SResultDemie23' + i);
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'SScoreDemie2' + i);
        score2.append(document.createTextNode('0'));



        objet3.append(team1, result11, result12, result13, score1);
        objet3.append(team2, result21, result22, result23, score2);

        match.append(objet3);
        branch9.append(match);

    }


    let branch10 = document.createElement('div');
    branch10.setAttribute('class', 'Branch_10');
    let match = document.createElement('div');
    match.setAttribute('class', 'Match_83');

    let objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_83');

    // --------------------------First team-----------------------------
    const team1 = document.createElement('span');
    team1.setAttribute('class', 'Name');
    team1.setAttribute('id', 'STeamFinal10');
    team1.append(document.createTextNode('9eme Place'));

    const result11 = document.createElement('input');
    result11.setAttribute('type', 'number');
    result11.setAttribute('class', 'Result');
    result11.setAttribute('id', 'SResultFinal110');
    result11.setAttribute('value', 0);
    result11.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result12 = document.createElement('input');
    result12.setAttribute('type', 'number');
    result12.setAttribute('class', 'Result');
    result12.setAttribute('id', 'SResultFinal120');
    result12.setAttribute('value', 0);
    result12.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result13 = document.createElement('input');
    result13.setAttribute('type', 'number');
    result13.setAttribute('class', 'Result');
    result13.setAttribute('id', 'SResultFinal130');
    result13.setAttribute('value', 0);
    result13.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const score1 = document.createElement('span');
    score1.setAttribute('class', 'Score');
    score1.setAttribute('id', 'SScoreFinal10');
    score1.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team2 = document.createElement('span');
    team2.setAttribute('class', 'Name');
    team2.setAttribute('id', 'STeamFinal20');
    team2.append(document.createTextNode('10eme Place'));

    const result21 = document.createElement('input');
    result21.setAttribute('type', 'number');
    result21.setAttribute('class', 'Result');
    result21.setAttribute('id', 'SResultFinal210');
    result21.setAttribute('value', 0);
    result21.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result22 = document.createElement('input');
    result22.setAttribute('type', 'number');
    result22.setAttribute('class', 'Result');
    result22.setAttribute('id', 'SResultFinal220');
    result22.setAttribute('value', 0);
    result22.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const result23 = document.createElement('input');
    result23.setAttribute('type', 'number');
    result23.setAttribute('class', 'Result');
    result23.setAttribute('id', 'SResultFinal230');
    result23.setAttribute('value', 0);
    result23.setAttribute('onclick', 'myFunction6(2,' + '0' + ')');
    const score2 = document.createElement('span');
    score2.setAttribute('class', 'Score');
    score2.setAttribute('id', 'SScoreFinal20');
    score2.append(document.createTextNode('0'));
    // --------------------------End team-----------------------------

    objet4.append(team1, result11, result12, result13, score1);
    objet4.append(team2, result21, result22, result23, score2);

    match.append(objet4);
    branch10.append(match);
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    match = document.createElement('div');
    match.setAttribute('class', 'Match_83');

    objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_83');

    // --------------------------First team-----------------------------
    const team3 = document.createElement('span');
    team3.setAttribute('class', 'Name');
    team3.setAttribute('id', 'STeamFinal11');
    team3.append(document.createTextNode('11eme Place'));

    const result31 = document.createElement('input');
    result31.setAttribute('type', 'number');
    result31.setAttribute('class', 'ResultTest');
    result31.setAttribute('id', 'SResultFinal111');
    result31.setAttribute('value', 0);
    result31.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result32 = document.createElement('input');
    result32.setAttribute('type', 'number');
    result32.setAttribute('class', 'ResultTest');
    result32.setAttribute('id', 'SResultFinal121');
    result32.setAttribute('value', 0);
    result32.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result33 = document.createElement('input');
    result33.setAttribute('type', 'number');
    result33.setAttribute('class', 'ResultTest');
    result33.setAttribute('id', 'SResultFinal131');
    result33.setAttribute('value', 0);
    result33.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const score3 = document.createElement('span');
    score3.setAttribute('class', 'ScoreTest');
    score3.setAttribute('id', 'SScoreFinal11');
    score3.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team4 = document.createElement('span');
    team4.setAttribute('class', 'Name');
    team4.setAttribute('id', 'STeamFinal21');
    team4.append(document.createTextNode('12 Places'));

    const result41 = document.createElement('input');
    result41.setAttribute('type', 'number');
    result41.setAttribute('class', 'ResultTest');
    result41.setAttribute('id', 'SResultFinal211');
    result41.setAttribute('value', 0);
    result41.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result42 = document.createElement('input');
    result42.setAttribute('type', 'number');
    result42.setAttribute('class', 'ResultTest');
    result42.setAttribute('id', 'SResultFinal221');
    result42.setAttribute('value', 0);
    result42.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const result43 = document.createElement('input');
    result43.setAttribute('type', 'number');
    result43.setAttribute('class', 'ResultTest');
    result43.setAttribute('id', 'SResultFinal231');
    result43.setAttribute('value', 0);
    result43.setAttribute('onclick', 'myFunction7(3,' + '1' + ')');
    const score4 = document.createElement('span');
    score4.setAttribute('class', 'ScoreTest');
    score4.setAttribute('id', 'SScoreFinal21');
    score4.append(document.createTextNode('0'));

    objet4.append(team3, result31, result32, result33, score3);
    objet4.append(team4, result41, result42, result43, score4);

    match.append(objet4);
    branch10.append(match);
    // --------------------------End team-----------------------------
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000



    document.getElementById('tableauSecondaire').append(branch8);
    document.getElementById('tableauSecondaire').append(branch9);
    document.getElementById('tableauSecondaire').append(branch10);

}
function finalBoardCreationSeize() {
    document.getElementById('tableau12Equipes').innerHTML = '';
    document.getElementById('tableau16Equipes').style.display = 'flex';
    const branch1 = document.createElement('div');
    branch1.setAttribute('class', 'Branch_1');
    for (let i = 0; i < nbrTeams / 2; i++) {
        // (i*2+' '+(1+(i*2)));  
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_01');

        const objet1 = document.createElement('div');
        objet1.setAttribute('class', 'Object_1');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'Team1' + i);
        team1.append(document.createTextNode(teamListCopie[(i * 2)][1] + '/' + teamListCopie[(i * 2)][2]));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('id', 'Result11' + i);
        result11.setAttribute('value', 0);
        result11.setAttribute('onclick', 'myFunction(0,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('id', 'Result12' + i);
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction(0,' + i + ')');
        result12.setAttribute('value', 0);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('id', 'Result13' + i);
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction(0,' + i + ')');


        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'Score1' + i);
        score1.append(document.createTextNode('0'));

        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'Team2' + i);
        team2.append(document.createTextNode(teamListCopie[(1 + (i * 2))][1] + '/' + teamListCopie[(1 + (i * 2))][2]));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('id', 'Result21' + i);
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction(0,' + i + ')');


        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('id', 'Result22' + i);
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction(0,' + i + ')');


        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('id', 'Result23' + i);
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(0,' + i + ')');


        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'Score2' + i);
        score2.append(document.createTextNode('0'));


        objet1.append(team1, result11, result12, result13, score1);
        objet1.append(team2, result21, result22, result23, score2);

        match.append(objet1);
        branch1.append(match);



    }

    const branch2 = document.createElement('div');
    branch2.setAttribute('class', 'Branch_2');
    for (let i = 0; i < 4; i++) {
        // (i*2+' '+(1+(i*2)));  
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_02');

        const objet2 = document.createElement('div');
        objet2.setAttribute('class', 'Object_2');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'TeamQuart1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('id', 'ResultQuart11' + i);
        result11.setAttribute('value', 0);
        result11.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('id', 'ResultQuart12' + i);
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('id', 'ResultQuart13' + i);
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'ScoreQuart1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'TeamQuart2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('id', 'ResultQuart21' + i);
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('id', 'ResultQuart22' + i);
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('id', 'ResultQuart23' + i);
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'ScoreQuart2' + i);
        score2.append(document.createTextNode('0'));



        objet2.append(team1, result11, result12, result13, score1);
        objet2.append(team2, result21, result22, result23, score2);

        match.append(objet2);
        branch2.append(match);

    }

    const branch3 = document.createElement('div');
    branch3.setAttribute('class', 'Branch_3');
    for (let i = 0; i < nbrTeams / 8; i++) {
        // (i*2+' '+(1+(i*2)));  
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_03');

        const objet3 = document.createElement('div');
        objet3.setAttribute('class', 'Object_3');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'TeamDemie1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('value', 0);
        result11.setAttribute('id', 'ResultDemie11' + i);
        result11.setAttribute('onclick', 'myFunction(2,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result12.setAttribute('id', 'ResultDemie12' + i);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result13.setAttribute('id', 'ResultDemie13' + i);
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'ScoreDemie1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'TeamDemie2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result21.setAttribute('id', 'ResultDemie21' + i);
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result22.setAttribute('id', 'ResultDemie22' + i);
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result23.setAttribute('id', 'ResultDemie23' + i);
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'ScoreDemie2' + i);
        score2.append(document.createTextNode('0'));



        objet3.append(team1, result11, result12, result13, score1);
        objet3.append(team2, result21, result22, result23, score2);

        match.append(objet3);
        branch3.append(match);

    }


    let branch4 = document.createElement('div');
    branch4.setAttribute('class', 'Branch_4');
    let match = document.createElement('div');
    match.setAttribute('class', 'Match_04');

    let objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_4');

    // --------------------------First team-----------------------------
    const team1 = document.createElement('span');
    team1.setAttribute('class', 'Name');
    team1.setAttribute('id', 'TeamFinal10');
    team1.append(document.createTextNode('1er Place'));

    const result11 = document.createElement('input');
    result11.setAttribute('type', 'number');
    result11.setAttribute('class', 'Result');
    result11.setAttribute('id', 'ResultFinal110');
    result11.setAttribute('value', 0);
    result11.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result12 = document.createElement('input');
    result12.setAttribute('type', 'number');
    result12.setAttribute('class', 'Result');
    result12.setAttribute('id', 'ResultFinal120');
    result12.setAttribute('value', 0);
    result12.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result13 = document.createElement('input');
    result13.setAttribute('type', 'number');
    result13.setAttribute('class', 'Result');
    result13.setAttribute('id', 'ResultFinal130');
    result13.setAttribute('value', 0);
    result13.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const score1 = document.createElement('span');
    score1.setAttribute('class', 'Score');
    score1.setAttribute('id', 'ScoreFinal10');
    score1.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team2 = document.createElement('span');
    team2.setAttribute('class', 'Name');
    team2.setAttribute('id', 'TeamFinal20');
    team2.append(document.createTextNode('2eme Place'));

    const result21 = document.createElement('input');
    result21.setAttribute('type', 'number');
    result21.setAttribute('class', 'Result');
    result21.setAttribute('id', 'ResultFinal210');
    result21.setAttribute('value', 0);
    result21.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result22 = document.createElement('input');
    result22.setAttribute('type', 'number');
    result22.setAttribute('class', 'Result');
    result22.setAttribute('id', 'ResultFinal220');
    result22.setAttribute('value', 0);
    result22.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result23 = document.createElement('input');
    result23.setAttribute('type', 'number');
    result23.setAttribute('class', 'Result');
    result23.setAttribute('id', 'ResultFinal230');
    result23.setAttribute('value', 0);
    result23.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const score2 = document.createElement('span');
    score2.setAttribute('class', 'Score');
    score2.setAttribute('id', 'ScoreFinal20');
    score2.append(document.createTextNode('0'));
    // --------------------------End team-----------------------------

    objet4.append(team1, result11, result12, result13, score1);
    objet4.append(team2, result21, result22, result23, score2);

    match.append(objet4);
    branch4.append(match);
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    match = document.createElement('div');
    match.setAttribute('class', 'Match_04');

    objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_4');

    // --------------------------First team-----------------------------
    const team3 = document.createElement('span');
    team3.setAttribute('class', 'Name');
    team3.setAttribute('id', 'TeamFinal11');
    team3.append(document.createTextNode('3eme Place'));

    const result31 = document.createElement('input');
    result31.setAttribute('type', 'number');
    result31.setAttribute('class', 'ResultTest');
    result31.setAttribute('id', 'ResultFinal111');
    result31.setAttribute('value', 0);
    result31.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result32 = document.createElement('input');
    result32.setAttribute('type', 'number');
    result32.setAttribute('class', 'ResultTest');
    result32.setAttribute('id', 'ResultFinal121');
    result32.setAttribute('value', 0);
    result32.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result33 = document.createElement('input');
    result33.setAttribute('type', 'number');
    result33.setAttribute('class', 'ResultTest');
    result33.setAttribute('id', 'ResultFinal131');
    result33.setAttribute('value', 0);
    result33.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const score3 = document.createElement('span');
    score3.setAttribute('class', 'ScoreTest');
    score3.setAttribute('id', 'ScoreFinal11');
    score3.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team4 = document.createElement('span');
    team4.setAttribute('class', 'Name');
    team4.setAttribute('id', 'TeamFinal21');
    team4.append(document.createTextNode('4eme Place'));

    const result41 = document.createElement('input');
    result41.setAttribute('type', 'number');
    result41.setAttribute('class', 'ResultTest');
    result41.setAttribute('id', 'ResultFinal211');
    result41.setAttribute('value', 0);
    result41.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result42 = document.createElement('input');
    result42.setAttribute('type', 'number');
    result42.setAttribute('class', 'ResultTest');
    result42.setAttribute('id', 'ResultFinal221');
    result42.setAttribute('value', 0);
    result42.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result43 = document.createElement('input');
    result43.setAttribute('type', 'number');
    result43.setAttribute('class', 'ResultTest');
    result43.setAttribute('id', 'ResultFinal231');
    result43.setAttribute('value', 0);
    result43.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const score4 = document.createElement('span');
    score4.setAttribute('class', 'ScoreTest');
    score4.setAttribute('id', 'ScoreFinal21');
    score4.append(document.createTextNode('0'));

    objet4.append(team3, result31, result32, result33, score3);
    objet4.append(team4, result41, result42, result43, score4);

    match.append(objet4);
    branch4.append(match);
    // --------------------------End team-----------------------------
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000







    document.getElementById('tableau16Equipes').append(branch1);
    document.getElementById('tableau16Equipes').append(branch2);
    document.getElementById('tableau16Equipes').append(branch3);
    document.getElementById('tableau16Equipes').append(branch4);

    secondaireBoardCreationSeize();
    tableauSecondaireLocker = 1;
    document.getElementById('Tableau Secondaire').style.display = 'none';
}
function finalBoardCreationDouze() {
    
    document.getElementById('tableau16Equipes').innerHTML = '';

    document.getElementById('tableau12Equipes').style.display = 'flex';
    const branch1 = document.createElement('div');
    branch1.setAttribute('class', 'Branch_1');

    for (let i = 0; i < 4; i++) {
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_01');

        const objet1 = document.createElement('div');
        objet1.setAttribute('class', 'Object_1');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'Team1' + i);
        team1.append(document.createTextNode(teamListCopie[(i * 2)+4][1] + '/' + teamListCopie[(i * 2)+4][2]));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('id', 'Result11' + i);
        result11.setAttribute('value', 0);
        result11.setAttribute('onclick', 'myFunction11(0,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('id', 'Result12' + i);
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction11(0,' + i + ')');
        result12.setAttribute('value', 0);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('id', 'Result13' + i);
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction11(0,' + i + ')');


        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'Score1' + i);
        score1.append(document.createTextNode('0'));

        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'Team2' + i);
        team2.append(document.createTextNode(teamListCopie[(5 + (i * 2))][1] + '/' + teamListCopie[(5+ (i * 2))][2]));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('id', 'Result21' + i);
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction11(0,' + i + ')');


        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('id', 'Result22' + i);
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction11(0,' + i + ')');


        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('id', 'Result23' + i);
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction11(0,' + i + ')');


        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'Score2' + i);
        score2.append(document.createTextNode('0'));


        objet1.append(team1, result11, result12, result13, score1);
        objet1.append(team2, result21, result22, result23, score2);

        match.append(objet1);
        branch1.append(match);



    }

    const branch2 = document.createElement('div');
    branch2.setAttribute('class', 'Branch_2');
    for (let i = 0; i < 4; i++) {
        // (i*2+' '+(1+(i*2)));  
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_02');

        const objet2 = document.createElement('div');
        objet2.setAttribute('class', 'Object_2');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'TeamQuart1' + i);
        team1.append(document.createTextNode(teamListCopie[i][1]+'/'+teamListCopie[i][2]));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('id', 'ResultQuart11' + i);
        result11.setAttribute('value', 0);
        result11.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('id', 'ResultQuart12' + i);
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('id', 'ResultQuart13' + i);
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'ScoreQuart1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'TeamQuart2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('id', 'ResultQuart21' + i);
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('id', 'ResultQuart22' + i);
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('id', 'ResultQuart23' + i);
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(1,' + i + ')');
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'ScoreQuart2' + i);
        score2.append(document.createTextNode('0'));



        objet2.append(team1, result11, result12, result13, score1);
        objet2.append(team2, result21, result22, result23, score2);

        match.append(objet2);
        branch2.append(match);

    }

    const branch3 = document.createElement('div');
    branch3.setAttribute('class', 'Branch_3');
    for (let i = 0; i < nbrTeams / 8; i++) {
        // (i*2+' '+(1+(i*2)));  
        const match = document.createElement('div');
        match.setAttribute('class', 'Match_03');

        const objet3 = document.createElement('div');
        objet3.setAttribute('class', 'Object_3');
        // --------------------------First team-----------------------------
        const team1 = document.createElement('span');
        team1.setAttribute('class', 'Name');
        team1.setAttribute('id', 'TeamDemie1' + i);
        team1.append(document.createTextNode('_____'));

        const result11 = document.createElement('input');
        result11.setAttribute('type', 'number');
        result11.setAttribute('class', 'Result');
        result11.setAttribute('value', 0);
        result11.setAttribute('id', 'ResultDemie11' + i);
        result11.setAttribute('onclick', 'myFunction(2,' + i + ')');
        const result12 = document.createElement('input');
        result12.setAttribute('type', 'number');
        result12.setAttribute('class', 'Result');
        result12.setAttribute('value', 0);
        result12.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result12.setAttribute('id', 'ResultDemie12' + i);
        const result13 = document.createElement('input');
        result13.setAttribute('type', 'number');
        result13.setAttribute('class', 'Result');
        result13.setAttribute('value', 0);
        result13.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result13.setAttribute('id', 'ResultDemie13' + i);
        const score1 = document.createElement('span');
        score1.setAttribute('class', 'Score');
        score1.setAttribute('id', 'ScoreDemie1' + i);
        score1.append(document.createTextNode('0'));


        // --------------------------Second team-----------------------------
        const team2 = document.createElement('span');
        team2.setAttribute('class', 'Name');
        team2.setAttribute('id', 'TeamDemie2' + i);
        team2.append(document.createTextNode('_____'));

        const result21 = document.createElement('input');
        result21.setAttribute('type', 'number');
        result21.setAttribute('class', 'Result');
        result21.setAttribute('value', 0);
        result21.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result21.setAttribute('id', 'ResultDemie21' + i);
        const result22 = document.createElement('input');
        result22.setAttribute('type', 'number');
        result22.setAttribute('class', 'Result');
        result22.setAttribute('value', 0);
        result22.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result22.setAttribute('id', 'ResultDemie22' + i);
        const result23 = document.createElement('input');
        result23.setAttribute('type', 'number');
        result23.setAttribute('class', 'Result');
        result23.setAttribute('value', 0);
        result23.setAttribute('onclick', 'myFunction(2,' + i + ')');
        result23.setAttribute('id', 'ResultDemie23' + i);
        const score2 = document.createElement('span');
        score2.setAttribute('class', 'Score');
        score2.setAttribute('id', 'ScoreDemie2' + i);
        score2.append(document.createTextNode('0'));



        objet3.append(team1, result11, result12, result13, score1);
        objet3.append(team2, result21, result22, result23, score2);

        match.append(objet3);
        branch3.append(match);

    }


    let branch4 = document.createElement('div');
    branch4.setAttribute('class', 'Branch_4');
    let match = document.createElement('div');
    match.setAttribute('class', 'Match_04');

    let objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_4');

    // --------------------------First team-----------------------------
    const team1 = document.createElement('span');
    team1.setAttribute('class', 'Name');
    team1.setAttribute('id', 'TeamFinal10');
    team1.append(document.createTextNode('1er Place'));

    const result11 = document.createElement('input');
    result11.setAttribute('type', 'number');
    result11.setAttribute('class', 'Result');
    result11.setAttribute('id', 'ResultFinal110');
    result11.setAttribute('value', 0);
    result11.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result12 = document.createElement('input');
    result12.setAttribute('type', 'number');
    result12.setAttribute('class', 'Result');
    result12.setAttribute('id', 'ResultFinal120');
    result12.setAttribute('value', 0);
    result12.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result13 = document.createElement('input');
    result13.setAttribute('type', 'number');
    result13.setAttribute('class', 'Result');
    result13.setAttribute('id', 'ResultFinal130');
    result13.setAttribute('value', 0);
    result13.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const score1 = document.createElement('span');
    score1.setAttribute('class', 'Score');
    score1.setAttribute('id', 'ScoreFinal10');
    score1.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team2 = document.createElement('span');
    team2.setAttribute('class', 'Name');
    team2.setAttribute('id', 'TeamFinal20');
    team2.append(document.createTextNode('2eme Place'));

    const result21 = document.createElement('input');
    result21.setAttribute('type', 'number');
    result21.setAttribute('class', 'Result');
    result21.setAttribute('id', 'ResultFinal210');
    result21.setAttribute('value', 0);
    result21.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result22 = document.createElement('input');
    result22.setAttribute('type', 'number');
    result22.setAttribute('class', 'Result');
    result22.setAttribute('id', 'ResultFinal220');
    result22.setAttribute('value', 0);
    result22.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const result23 = document.createElement('input');
    result23.setAttribute('type', 'number');
    result23.setAttribute('class', 'Result');
    result23.setAttribute('id', 'ResultFinal230');
    result23.setAttribute('value', 0);
    result23.setAttribute('onclick', 'myFunction(3,' + '0' + ')');
    const score2 = document.createElement('span');
    score2.setAttribute('class', 'Score');
    score2.setAttribute('id', 'ScoreFinal20');
    score2.append(document.createTextNode('0'));
    // --------------------------End team-----------------------------

    objet4.append(team1, result11, result12, result13, score1);
    objet4.append(team2, result21, result22, result23, score2);

    match.append(objet4);
    branch4.append(match);
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    match = document.createElement('div');
    match.setAttribute('class', 'Match_04');

    objet4 = document.createElement('div');
    objet4.setAttribute('class', 'Object_4');

    // --------------------------First team-----------------------------
    const team3 = document.createElement('span');
    team3.setAttribute('class', 'Name');
    team3.setAttribute('id', 'TeamFinal11');
    team3.append(document.createTextNode('3eme Place'));

    const result31 = document.createElement('input');
    result31.setAttribute('type', 'number');
    result31.setAttribute('class', 'ResultTest');
    result31.setAttribute('id', 'ResultFinal111');
    result31.setAttribute('value', 0);
    result31.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result32 = document.createElement('input');
    result32.setAttribute('type', 'number');
    result32.setAttribute('class', 'ResultTest');
    result32.setAttribute('id', 'ResultFinal121');
    result32.setAttribute('value', 0);
    result32.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result33 = document.createElement('input');
    result33.setAttribute('type', 'number');
    result33.setAttribute('class', 'ResultTest');
    result33.setAttribute('id', 'ResultFinal131');
    result33.setAttribute('value', 0);
    result33.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const score3 = document.createElement('span');
    score3.setAttribute('class', 'ScoreTest');
    score3.setAttribute('id', 'ScoreFinal11');
    score3.append(document.createTextNode('0'));

    // --------------------------Second team-----------------------------
    const team4 = document.createElement('span');
    team4.setAttribute('class', 'Name');
    team4.setAttribute('id', 'TeamFinal21');
    team4.append(document.createTextNode('4eme Place'));

    const result41 = document.createElement('input');
    result41.setAttribute('type', 'number');
    result41.setAttribute('class', 'ResultTest');
    result41.setAttribute('id', 'ResultFinal211');
    result41.setAttribute('value', 0);
    result41.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result42 = document.createElement('input');
    result42.setAttribute('type', 'number');
    result42.setAttribute('class', 'ResultTest');
    result42.setAttribute('id', 'ResultFinal221');
    result42.setAttribute('value', 0);
    result42.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const result43 = document.createElement('input');
    result43.setAttribute('type', 'number');
    result43.setAttribute('class', 'ResultTest');
    result43.setAttribute('id', 'ResultFinal231');
    result43.setAttribute('value', 0);
    result43.setAttribute('onclick', 'myFunction5(3,' + '1' + ')');
    const score4 = document.createElement('span');
    score4.setAttribute('class', 'ScoreTest');
    score4.setAttribute('id', 'ScoreFinal21');
    score4.append(document.createTextNode('0'));

    objet4.append(team3, result31, result32, result33, score3);
    objet4.append(team4, result41, result42, result43, score4);

    match.append(objet4);
    branch4.append(match);
    // --------------------------End team-----------------------------
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    // 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000







    document.getElementById('tableau12Equipes').append(branch1);
    document.getElementById('tableau12Equipes').append(branch2);
    document.getElementById('tableau12Equipes').append(branch3);
    document.getElementById('tableau12Equipes').append(branch4);

    secondaireBoardCreationDouze();
    tableauSecondaireLocker = 1;
    document.getElementById('Tableau Secondaire').style.display = 'none';
   

}

//--------------------------------------/Tableau Final/---------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~16 Equipes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function myFunction(type, i) {
    let UwU;
    let next;
    switch (type) {
        case 0:
            UwU = '';
            next = 'Quart';
            break;
        case 1:
            UwU = 'Quart';
            next = 'Demie';
            break;
        case 2:
            UwU = 'Demie';
            next = 'Final';
            break;
        case 3:
            UwU = 'Final';
            // next = 'Winner';     Faire cette balise
            break;
        default:
            break;
    }
    let x = document.getElementById('Result' + UwU + '11' + i).value;
    let y = document.getElementById('Result' + UwU + '12' + i).value;
    let z = document.getElementById('Result' + UwU + '13' + i).value;
    let a = document.getElementById('Result' + UwU + '21' + i).value;
    let b = document.getElementById('Result' + UwU + '22' + i).value;
    let c = document.getElementById('Result' + UwU + '23' + i).value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('Score' + UwU + '1' + i).innerHTML = sol;
    document.getElementById('Score' + UwU + '2' + i).innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('Team' + UwU + '1' + i).innerHTML;
        looser = document.getElementById('Team' + UwU + '2' + i).innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('Team' + UwU + '2' + i).innerHTML;
        looser = document.getElementById('Team' + UwU + '1' + i).innerHTML;
    }
    if (winner != '') {


        switch (UwU) {
            case '':
                switch (i) {
                    case 0:
                        document.getElementById('Team' + next + '10').innerHTML = winner;
                        document.getElementById('STeamQuart10').innerHTML = looser;
                        break;
                    case 1:
                        document.getElementById('Team' + next + '20').innerHTML = winner;
                        document.getElementById('STeamQuart20').innerHTML = looser;
                        break;
                    case 2:
                        document.getElementById('Team' + next + '11').innerHTML = winner;
                        document.getElementById('STeamQuart11').innerHTML = looser;
                        break;
                    case 3:
                        document.getElementById('Team' + next + '21').innerHTML = winner;
                        document.getElementById('STeamQuart21').innerHTML = looser;
                        break;
                    case 4:
                        document.getElementById('Team' + next + '12').innerHTML = winner;
                        document.getElementById('STeamQuart12').innerHTML = looser;
                        break;
                    case 5:
                        document.getElementById('Team' + next + '22').innerHTML = winner;
                        document.getElementById('STeamQuart22').innerHTML = looser;
                        break;
                    case 6:
                        document.getElementById('Team' + next + '13').innerHTML = winner;
                        document.getElementById('STeamQuart13').innerHTML = looser;
                        break;
                    case 7:
                        document.getElementById('Team' + next + '23').innerHTML = winner;
                        document.getElementById('STeamQuart23').innerHTML = looser;
                        break;
                    default:
                        break;
                }
                break;
            case 'Quart':
                switch (i) {
                    case 0:
                        document.getElementById('Team' + next + '10').innerHTML = winner;
                        document.getElementById('Repeche10').innerHTML = looser;

                        break;
                    case 1:
                        document.getElementById('Team' + next + '20').innerHTML = winner;
                        document.getElementById('Repeche20').innerHTML = looser;

                        break;
                    case 2:
                        document.getElementById('Team' + next + '11').innerHTML = winner;
                        document.getElementById('Repeche11').innerHTML = looser;
                        break;
                    case 3:
                        document.getElementById('Team' + next + '21').innerHTML = winner;
                        document.getElementById('Repeche21').innerHTML = looser;
                        break;
                    default:
                        break;
                }
                break;
            case 'Demie':
                switch (i) {
                    case 0:
                        document.getElementById('Team' + next + '10').innerHTML = winner;
                        document.getElementById('TeamFinal11').innerHTML = looser;

                        break;
                    case 1:
                        document.getElementById('Team' + next + '20').innerHTML = winner;
                        document.getElementById('TeamFinal21').innerHTML = looser;

                        break;
                    default:
                        break;
                }
                break;
            case 'Final':
                classement[0] = winner;
                classement[1] = looser;
                classement[2] = 'test';
                classement[3] = 'tset2';
                break;
            default:
                break;
        }
    }




}
function myFunction2(type, i) {
    let x = document.getElementById('ResultDefaitisteQuart11' + i).value;
    let y = document.getElementById('ResultDefaitisteQuart12' + i).value;
    let z = document.getElementById('ResultDefaitisteQuart13' + i).value;
    let a = document.getElementById('ResultDefaitisteQuart21' + i).value;
    let b = document.getElementById('ResultDefaitisteQuart22' + i).value;
    let c = document.getElementById('ResultDefaitisteQuart23' + i).value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('ScoreDefaitisteQuart1' + i).innerHTML = sol;
    document.getElementById('ScoreDefaitisteQuart2' + i).innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('Repeche1' + i).innerHTML;
        looser = document.getElementById('Repeche2' + i).innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('Repeche2' + i).innerHTML;
        looser = document.getElementById('Repeche1' + i).innerHTML;
    }

    if (i == 0) {
        document.getElementById('RepecheFinal10').innerHTML = winner;
        document.getElementById('RepecheFinal11').innerHTML = looser;

    } else if (i == 1) {
        document.getElementById('RepecheFinal20').innerHTML = winner;
        document.getElementById('RepecheFinal21').innerHTML = looser;

    }
}
function myFunction3(type, i) {
    let x = document.getElementById('ResultFinalQuart110').value;
    let y = document.getElementById('ResultFinalQuart120').value;
    let z = document.getElementById('ResultFinalQuart130').value;
    let a = document.getElementById('ResultFinalQuart210').value;
    let b = document.getElementById('ResultFinalQuart220').value;
    let c = document.getElementById('ResultFinalQuart230').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('ScoreFinalQuart10').innerHTML = sol;
    document.getElementById('ScoreFinalQuart20').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('RepecheFinal10').innerHTML;
        looser = document.getElementById('RepecheFinal20').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('RepecheFinal20').innerHTML;
        looser = document.getElementById('RepecheFinal10').innerHTML;
    }

    if (winner != '' && looser != '') {
        classement[4] = winner;
        classement[5] = looser;
    }

}
function myFunction4(type, i) {
    let x = document.getElementById('ResultFinalQuart111').value;
    let y = document.getElementById('ResultFinalQuart121').value;
    let z = document.getElementById('ResultFinalQuart131').value;
    let a = document.getElementById('ResultFinalQuart211').value;
    let b = document.getElementById('ResultFinalQuart221').value;
    let c = document.getElementById('ResultFinalQuart231').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('ScoreFinalQuart11').innerHTML = sol;
    document.getElementById('ScoreFinalQuart21').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('RepecheFinal11').innerHTML;
        looser = document.getElementById('RepecheFinal21').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('RepecheFinal21').innerHTML;
        looser = document.getElementById('RepecheFinal11').innerHTML;
    }
    if (winner != '' && looser != '') {
        classement[6] = winner;
        classement[7] = looser;
    }

}
function myFunction5(type, i) {
    let x = document.getElementById('ResultFinal111').value;
    let y = document.getElementById('ResultFinal121').value;
    let z = document.getElementById('ResultFinal131').value;
    let a = document.getElementById('ResultFinal211').value;
    let b = document.getElementById('ResultFinal221').value;
    let c = document.getElementById('ResultFinal231').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('ScoreFinal11').innerHTML = sol;
    document.getElementById('ScoreFinal21').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('TeamFinal11').innerHTML;
        looser = document.getElementById('TeamFinal21').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('TeamFinal21').innerHTML;
        looser = document.getElementById('TeamFinal11').innerHTML;
    }
    if (winner != '' && looser != '') {
        classement[3] = looser;
        classement[2] = winner;
    }

}
function myFunction6(type, i) {
    let UwU;
    let next;
    switch (type) {
        case 0:
            UwU = 'Quart';
            next = 'Demie';
            break;
        case 1:
            UwU = 'Demie';
            next = 'Final';
            break;
        case 2:
            UwU = 'Final';
            // next = 'Winner';     Faire cette balise
            break;
        default:
            break;
    }
    let x = document.getElementById('SResult' + UwU + '11' + i).value;
    let y = document.getElementById('SResult' + UwU + '12' + i).value;
    let z = document.getElementById('SResult' + UwU + '13' + i).value;
    let a = document.getElementById('SResult' + UwU + '21' + i).value;
    let b = document.getElementById('SResult' + UwU + '22' + i).value;
    let c = document.getElementById('SResult' + UwU + '23' + i).value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;

    document.getElementById('SScore' + UwU + '1' + i).innerHTML = sol;
    document.getElementById('SScore' + UwU + '2' + i).innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    ('STeam' + UwU + '1' + i);
    if (sol > sol2) {
        winner = document.getElementById('STeam' + UwU + '1' + i).innerHTML;
        looser = document.getElementById('STeam' + UwU + '2' + i).innerHTML;
        (winner + ' / ' + looser);
    } else if (sol < sol2) {
        winner = document.getElementById('STeam' + UwU + '2' + i).innerHTML;
        looser = document.getElementById('STeam' + UwU + '1' + i).innerHTML;
        (winner + ' / ' + looser);
    }

    if (winner != '') {


        switch (UwU) {

            case 'Quart':
                switch (i) {
                    case 0:
                        document.getElementById('STeam' + next + '10').innerHTML = winner;
                        document.getElementById('SRepeche10').innerHTML = looser;
                        break;
                    case 1:
                        document.getElementById('STeam' + next + '20').innerHTML = winner;
                        document.getElementById('SRepeche20').innerHTML = looser;
                        break;
                    case 2:
                        document.getElementById('STeam' + next + '11').innerHTML = winner;
                        document.getElementById('SRepeche11').innerHTML = looser;
                        break;
                    case 3:
                        document.getElementById('STeam' + next + '21').innerHTML = winner;
                        document.getElementById('SRepeche21').innerHTML = looser;
                        break;
                    default:
                        break;
                }
                break;
            case 'Demie':
                switch (i) {
                    case 0:
                        document.getElementById('STeam' + next + '10').innerHTML = winner;
                        document.getElementById('STeamFinal11').innerHTML = looser;

                        break;
                    case 1:
                        document.getElementById('STeam' + next + '20').innerHTML = winner;
                        document.getElementById('STeamFinal21').innerHTML = looser;

                        break;
                    default:
                        break;
                }
                break;
            case 'Final':
                classement[8] = winner;
                classement[9] = looser;

                break;
            default:
                break;
        }
    }




}
function myFunction7(type, i) {
    let x = document.getElementById('SResultFinal111').value;
    let y = document.getElementById('SResultFinal121').value;
    let z = document.getElementById('SResultFinal131').value;
    let a = document.getElementById('SResultFinal211').value;
    let b = document.getElementById('SResultFinal221').value;
    let c = document.getElementById('SResultFinal231').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('SScoreFinal11').innerHTML = sol;
    document.getElementById('SScoreFinal21').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('STeamFinal11').innerHTML;
        looser = document.getElementById('STeamFinal21').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('STeamFinal21').innerHTML;
        looser = document.getElementById('STeamFinal11').innerHTML;
    }
    if (winner != '' && looser != '') {
        classement[11] = looser;
        classement[10] = winner;
    }

}
function myFunction8(type, i) {
    let x = document.getElementById('SResultDefaitisteQuart11' + i).value;
    let y = document.getElementById('SResultDefaitisteQuart12' + i).value;
    let z = document.getElementById('SResultDefaitisteQuart13' + i).value;
    let a = document.getElementById('SResultDefaitisteQuart21' + i).value;
    let b = document.getElementById('SResultDefaitisteQuart22' + i).value;
    let c = document.getElementById('SResultDefaitisteQuart23' + i).value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('SScoreDefaitisteQuart1' + i).innerHTML = sol;
    document.getElementById('SScoreDefaitisteQuart2' + i).innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('SRepeche1' + i).innerHTML;
        looser = document.getElementById('SRepeche2' + i).innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('SRepeche2' + i).innerHTML;
        looser = document.getElementById('SRepeche1' + i).innerHTML;
    }

    if (i == 0) {
        document.getElementById('SRepecheFinal10').innerHTML = winner;
        document.getElementById('SRepecheFinal11').innerHTML = looser;

    } else if (i == 1) {
        document.getElementById('SRepecheFinal20').innerHTML = winner;
        document.getElementById('SRepecheFinal21').innerHTML = looser;

    }
}
function myFunction9(type, i) {
    let x = document.getElementById('SResultFinalQuart110').value;
    let y = document.getElementById('SResultFinalQuart120').value;
    let z = document.getElementById('SResultFinalQuart130').value;
    let a = document.getElementById('SResultFinalQuart210').value;
    let b = document.getElementById('SResultFinalQuart220').value;
    let c = document.getElementById('SResultFinalQuart230').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('SScoreFinalQuart10').innerHTML = sol;
    document.getElementById('SScoreFinalQuart20').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('SRepecheFinal10').innerHTML;
        looser = document.getElementById('SRepecheFinal20').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('SRepecheFinal20').innerHTML;
        looser = document.getElementById('SRepecheFinal10').innerHTML;
    }

    if (winner != '' && looser != '') {
        classement[12] = winner;
        classement[13] = looser;
    }

}
function myFunction10(type, i) {
    let x = document.getElementById('SResultFinalQuart111').value;
    let y = document.getElementById('SResultFinalQuart121').value;
    let z = document.getElementById('SResultFinalQuart131').value;
    let a = document.getElementById('SResultFinalQuart211').value;
    let b = document.getElementById('SResultFinalQuart221').value;
    let c = document.getElementById('SResultFinalQuart231').value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('SScoreFinalQuart11').innerHTML = sol;
    document.getElementById('SScoreFinalQuart21').innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('SRepecheFinal11').innerHTML;
        looser = document.getElementById('SRepecheFinal21').innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('SRepecheFinal21').innerHTML;
        looser = document.getElementById('SRepecheFinal11').innerHTML;
    }
    if (winner != '' && looser != '') {
        classement[14] = winner;
        classement[15] = looser;
    }

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\16 Equipes\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~16 Equipes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function myFunction11(type, i){
    let x = document.getElementById('Result11' + i).value;
    let y = document.getElementById('Result12' + i).value;
    let z = document.getElementById('Result13' + i).value;
    let a = document.getElementById('Result21' + i).value;
    let b = document.getElementById('Result22' + i).value;
    let c = document.getElementById('Result23' + i).value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let sol = x + y + z;
    let sol2 = a + b + c;
    document.getElementById('Score1' + i).innerHTML = sol;
    document.getElementById('Score2' + i).innerHTML = sol2;

    let winner = '';//Adapter pour chaque div
    let looser = '';
    if (sol > sol2) {
        winner = document.getElementById('Team1' + i).innerHTML;
        looser = document.getElementById('Team2' + i).innerHTML;
    } else if (sol < sol2) {
        winner = document.getElementById('Team2' + i).innerHTML;
        looser = document.getElementById('Team1' + i).innerHTML;
    }
    
    if (winner != '') {
        switch (i) {
            case 0:
                document.getElementById('TeamQuart20').innerHTML = winner;
                document.getElementById('STeamDemie10').innerHTML = looser;
                break;
            case 1:
                document.getElementById('TeamQuart21').innerHTML = winner;
                document.getElementById('STeamDemie20').innerHTML = looser;
                break;
            case 2:
                document.getElementById('TeamQuart22').innerHTML = winner;
                document.getElementById('STeamDemie11').innerHTML = looser;
                break;
            case 3:
                document.getElementById('TeamQuart23').innerHTML = winner;
                document.getElementById('STeamDemie21').innerHTML = looser;
                break;
            default:
                break;
        }
    }
        

    
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\16 Equipes\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}