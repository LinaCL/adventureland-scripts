const group = ["MistONE", "MistTWO"]
const leader = group[0]

var make_party = function () {
    if (character.id === leader) {
        for (let name of group) {
            send_party_invite(name)
        }
    } else {
        if (character.party) {
            parent.socket.emit("party", { event: "leave" })
            send_party_request(leader)
        }
    }
}

function on_party_request(name) {
    game_log("Party request.")
    if (group.indexOf(name) !== -1) {
        accept_party_request(name)
    }
}

function on_party_invite(name) {
    game_log("Party invite.")
    if (group.indexOf(name) !== -1) {
        accept_party_invite(name);
    }
}
