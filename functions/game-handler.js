/*const gameDefaults = require('./game-defaults');
const gameBoardcaster = require('./game-broadcaster');
const arrayHandler = require('./array-handler');
const gamesHandler = require('./games-handler');
const clientsHandler = require('./clients-handler');
const gameBroadcaster = require('./game-broadcaster');



const setPersonTypes = (gameId) => {

    console.log(`[ Set ][ PersonTypes ][ ${gameId} ]`);

    let game = gamesHandler.games[gameId];

    let playerCount = Object.keys(game.private.playerData).length;
    let personTypes = gameDefaults.personTypeRatios[playerCount];

    for (let i = 0; i < Object.keys(personTypes).length; i++) {

        let personType = Object.keys(personTypes)[i];

        for (let j = 0; j < personTypes[personType]; j++) {

            let playerSet = false;

            while (!playerSet) {

                let randomPlayer = Object.keys(game.private.playerData)[Math.floor((Math.random() * playerCount))];

                if (game.private.playerData[randomPlayer].personType === "personUnknown") {
                    game.private.playerData[randomPlayer].personType = personType;
                    playerSet = true;
                };
            };
        };
    };
};



module.exports = {
    //processStartGame: processStartGame,
    processGameNightTime: processGameNightTime,
    processGameDayTime: processGameDayTime,
    processEndGame: processEndGame,
    setPersonTypes: setPersonTypes,
    checkIfNightTimeComplete: checkIfNightTimeComplete,
    getAliveMafia: getAliveMafia,
    checkIfDayTimeComplete: checkIfDayTimeComplete
};*/