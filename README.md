# Decentralized autonomous Organization

## Governance

* Governance is all the Processes of Interaction over a Social System
* It is done by the Government of a State, by a Market or by a Network
* The Goal of Governance to allow a Group of People to make generally accepted Decisions

## Types of Governance

| Off-Chain Governance                                                                                         | On-Chain Governance                                           |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| A Person (EOA) or a Group of Persons (Mutlisignature) is in Control                                          | Specific Governor Contract is in Control                      |
| Community Members can express their Opinions                                                                 | Community Members Vote are submitted to the Governor Contract |
| Vote Results are non-binding (so the Person with Control could execute an Action without approved by a Vote) | Actions can only be executed if they are approved by a Vote   |

## OpenZeppelin Governor Modules

* There are Modules to make the Governance modular
* User can vote for, against or abstain a Proposal

### Required Modules

* Votes: Where do the Users get their Voting Power from?
* Counting: What Opinions do Users have when Voting, and how are Votes counted?

### Optional Modules

* Timelock: Perform Operations (queued Proposal) through a TimeLock Contract (Time Lapse)
* Threshold: Limit some Operation (Proposal) to Users with enough Tokens

## DAO Usage

1) Run a Node: `npm run node`
2) Deploy Smart Contracts: `npm run deploy`
3) Create a Proposal: `npm run propose:local`
4) Vote for created Proposal: `npm run vote:local`
5) Queue and execute a voted Proposal: `npm run queue-and-execute:local`

## DAO Questions

* Which Users are allowed to create Proposals?
* Do Users need to have a certain Number of Tokens to make Proposals?
* How long do Users have to respond to a voted Proposal before it is executed?
