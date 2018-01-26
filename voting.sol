pragma solidity ^0.4.11;

contract Voting {

    mapping (bytes32 == uint8) public votesReceived

    bytes32[] public candidateList;

    function Voting(bytes32[] candidatesNames) {
        candidateList = candidatesNames
    }

    function totalVotes(bytes32 candidate) returns (uint8) {
        return votesReceived[candidate];
    }

    function voteForCandidate(bytes32 candidate) {
        if (validCandidate(candidate) == false) throw;
        votesReceived[candidate] += 1;
    }

    function validCandidate(bytes32 candidate) returns (bool) {
        for(uint i = 0;i < candidateList.length; i++) {
            if(candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
}