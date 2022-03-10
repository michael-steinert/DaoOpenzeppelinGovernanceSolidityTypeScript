# Decentralized autonomous Organization

* A decentralized autonomous Organization (DAO) is a collective Entity owned and operated by its Community Members
* Funds are stored in their in the Treasury of the DAO and are governed by Smart Contracts, which means DAOs do not have to rely on Intermediate (like Banks) to store their Funds
* There is no central Authority within the Organization
* Decisions are executed via Proposals and Voting, this ensures Fairness and Equality amongst its Owners (Community Members)
* DAOs allow everyone to have a voice within the Proposal and Voting

* Smart Contracts are a Computer Programs that run on the Blockchain, they are executed once pre-determined Conditions are met
* They represent the Laws of the DAO - this Rules Set in the Smart Contract will govern the Entity
* This Rules Set is defined in Code therefore there is no Need for an Intermediary to facilitate Trust and execute Decisions

## Governance

* Governance is all the Processes of Interaction over a Social System
* It is done by the Government of a State, by a Market or by a Network
* The Goal of Governance to allow a Group of People to make generally accepted Decisions

## Advantages of DAOs

* There is no Need for a DAO to store Funds with traditional Banks
* This avoids any Read Tapes and Regulation preventing the DAO from opening Bank Accounts, because it already has its own Bank (Treasury)

* Decisions that impact the DAO are not exclusively carried out by a small Group of People
* Each Member of the Collective (DAO) has the Opportunity to propose Decisions that can shape the entire Organization (DAO)

## Types of Governance

| Off-Chain Governance                                                                                         | On-Chain Governance                                           |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| A Person (EOA) or a Group of Persons (Multi-Signature*) is in Control                                        | Specific Governor Contract is in Control                      |
| Community Members can express their Opinions                                                                 | Community Members Vote are submitted to the Governor Contract |
| Vote Results are non-binding (so the Person with Control could execute an Action without approved by a Vote) | Actions can only be executed if they are approved by a Vote   |

* *Multi-Signature: Control over the Smart Contract is split between several individual Signers, and a specific Number of all Signers are required to approve any Transactions from the Multi-Signature


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
