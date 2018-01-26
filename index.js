web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
abi = JSON.parse('[{"constant":false},"inputs":[{"name": "candidate"}]]')
VotingContract = web3.eth.contract(abi);

contractInstance = VotingContract.at('')
condidates = {"Chris": "candidate-1", "Sophie": "candidate-2", "Rachel": "candidate-3"};

function voteForCandidate() {
    candidateName = $("#candidate").val();
    contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts})
}

$(document).ready(function() {
    candidateNames = Object.keys(candidates);
    for (var i = 0; i < candidateNames.length; i++) {
        let name = candidateNames[i];
        let val = contractInstance.totalVotesFor.call(name).toString()
        $("#" + candidates[name].html(val));
    }
})