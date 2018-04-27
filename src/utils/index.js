export function GraphDataNormaliser(filterName, teamName, teams) {
    let year = 2008;
    let data = [];
    
    let filtered = teams[teamName];
    
    const mapper = {
        "Max Score": "maxScore",
        "Match Won": "matchWon",
        "Match Won if Toss Won %": "matchWonTossWonPercentage",
        "Total 6s & 4s": "total6s4s",
        "Match Won if Bat first %": "matchWonBatFirst",
        "Match Won if Ball first %": "matchWonBowledFirst",
    }
    
    const key = mapper[filterName];
    let records = filtered[key];

    records.map((record)=> {
        let obj = {};
        obj['name'] = year;
        obj['value'] = Number(record);
        year++;
        data = data.concat(obj)
    });

    return data;
}

export function getPlayerNames(playerList){
    return Object.keys(playerList);
}