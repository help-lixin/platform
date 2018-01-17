(function() {
    let fundRequestAbi = [{
        "constant": false,
        "inputs": [{"name": "platform", "type": "bytes32"}, {
            "name": "platformId",
            "type": "bytes32"
        }, {"name": "solver", "type": "string"}, {"name": "solverAddress", "type": "address"}, {
            "name": "r",
            "type": "bytes32"
        }, {"name": "s", "type": "bytes32"}, {"name": "v", "type": "uint8"}],
        "name": "claim",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "claimSignerAddress",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_platform", "type": "bytes32"}, {
            "name": "_platformId",
            "type": "bytes32"
        }, {"name": "_url", "type": "string"}, {"name": "_value", "type": "uint256"}],
        "name": "fund",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_tokenAddress", "type": "address"}],
        "name": "setTokenAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_platform", "type": "bytes32"}, {"name": "_platformId", "type": "bytes32"}],
        "name": "balance",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_from", "type": "address"}, {"name": "_amount", "type": "uint256"}, {
            "name": "_token",
            "type": "address"
        }, {"name": "_data", "type": "bytes"}],
        "name": "receiveApproval",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "requestsFunded",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_platform", "type": "bytes32"}, {
            "name": "_platformId",
            "type": "bytes32"
        }, {"name": "_funder", "type": "address"}],
        "name": "getFundInfo",
        "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {
            "name": "",
            "type": "uint256"
        }, {"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_newOwner", "type": "address"}],
        "name": "changeOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalFunded",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalBalance",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_claimSignerAddress", "type": "address"}],
        "name": "setClaimSignerAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalNumberOfFunders",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "token",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"name": "_tokenAddress", "type": "address"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
            "indexed": false,
            "name": "platform",
            "type": "bytes32"
        }, {"indexed": false, "name": "platformId", "type": "bytes32"}, {
            "indexed": false,
            "name": "url",
            "type": "string"
        }, {"indexed": false, "name": "value", "type": "uint256"}],
        "name": "Funded",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "logdata", "type": "string"}],
        "name": "LOG",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "solverAddress", "type": "address"}, {
            "indexed": false,
            "name": "platform",
            "type": "bytes32"
        }, {"indexed": false, "name": "platformId", "type": "bytes32"}, {
            "indexed": false,
            "name": "solver",
            "type": "string"
        }, {"indexed": false, "name": "value", "type": "uint256"}],
        "name": "Claimed",
        "type": "event"
    }];
    let tokenAbi = [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_amount", "type": "uint256"}],
        "name": "approve",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "creationBlock",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_newController", "type": "address"}],
        "name": "changeController",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_blockNumber", "type": "uint256"}],
        "name": "balanceOfAt",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_cloneTokenName", "type": "string"}, {
            "name": "_cloneDecimalUnits",
            "type": "uint8"
        }, {"name": "_cloneTokenSymbol", "type": "string"}, {
            "name": "_snapshotBlock",
            "type": "uint256"
        }, {"name": "_transfersEnabled", "type": "bool"}],
        "name": "createCloneToken",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "isFundRequestToken",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "parentToken",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_amount", "type": "uint256"}],
        "name": "generateTokens",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_blockNumber", "type": "uint256"}],
        "name": "totalSupplyAt",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"}],
        "name": "transfer",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "transfersEnabled",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "parentSnapShotBlock",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_spender", "type": "address"}, {
            "name": "_amount",
            "type": "uint256"
        }, {"name": "_extraData", "type": "bytes"}],
        "name": "approveAndCall",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_amount", "type": "uint256"}],
        "name": "destroyTokens",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
        "name": "allowance",
        "outputs": [{"name": "remaining", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_token", "type": "address"}],
        "name": "claimTokens",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "tokenFactory",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_transfersEnabled", "type": "bool"}],
        "name": "enableTransfers",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_spender", "type": "address"}, {
            "name": "_currentValue",
            "type": "uint256"
        }, {"name": "_amount", "type": "uint256"}],
        "name": "safeApprove",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "controller",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"name": "_tokenFactory", "type": "address"}, {
            "name": "_parentToken",
            "type": "address"
        }, {"name": "_parentSnapShotBlock", "type": "uint256"}, {
            "name": "_tokenName",
            "type": "string"
        }, {"name": "_decimalUnits", "type": "uint8"}, {
            "name": "_tokenSymbol",
            "type": "string"
        }, {"name": "_transfersEnabled", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "_token", "type": "address"}, {
            "indexed": true,
            "name": "_controller",
            "type": "address"
        }, {"indexed": false, "name": "_amount", "type": "uint256"}],
        "name": "ClaimedTokens",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
            "indexed": true,
            "name": "_to",
            "type": "address"
        }, {"indexed": false, "name": "_amount", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "_cloneToken", "type": "address"}, {
            "indexed": false,
            "name": "_snapshotBlock",
            "type": "uint256"
        }],
        "name": "NewCloneToken",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
            "indexed": true,
            "name": "_spender",
            "type": "address"
        }, {"indexed": false, "name": "_amount", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }];

    let tokenContractAddress = '0xfd1de38dc456112c55c3e6bc6134b2f545b91386';
    let fundRequestContractAddress = '0x797b33d3bb0c74a7860cd2ca80bf063809dced80';
    let tokenContract;
    let fundRequestContract;
    let web3;
    let provider = 'https://ropsten.infura.io/';
    let contractInitialized = false;

    let settings = {
        dataNames: {
            funding: 'fndTotalFunding'
        }
    };

    function init() {
        initIssueDetail();
        initIssueOverview();
    }

    function camelCaseToDash(str) {
        console.log(str, str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`));
        return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    }

    function initContracts() {
        if (!contractInitialized) {
            contractInitialized = true;
            web3 = new Web3(new Web3.providers.HttpProvider(provider));
            tokenContract = web3.eth.contract(tokenAbi).at(tokenContractAddress);
            fundRequestContract = web3.eth.contract(fundRequestAbi).at(fundRequestContractAddress);
        }
    }

    function weiToString(amountInWei) {
        let number = (+amountInWei / 1000000000000000000);
        return ((Math.round(number * 100) / 100).toFixed(2)).toLocaleString();
    }

    function createSpan(label, issueId, value, dataName, addFND, labelColor) {
        return createElement('span', issueId, label, value, dataName, addFND, labelColor);
    }

    function createDiv(label, issueId, value, dataName, addFND, labelColor) {
        return createElement('div', issueId, label, value, dataName, addFND, labelColor);
    }

    function createElement(tagName, issueId, label, value, dataName, addFND = true, labelColor = '') {
        let tag = document.createElement(tagName);
        let labelSpan = document.createElement('span');
        labelSpan.innerHTML = label;
        let valueSpan = document.createElement('span');
        if (labelColor !== '') {
            valueSpan.className = 'label label-color';
            valueSpan.style = 'color: #fff; background-color: ' + labelColor;
        }
        let valueSpanAmount = document.createElement('span');
        valueSpanAmount.dataset[dataName] = issueId;
        valueSpanAmount.innerHTML = value;
        valueSpan.appendChild(valueSpanAmount);

        if (addFND) {
            let fndSpan = document.createElement('span');
            fndSpan.innerHTML = ' FND';
            valueSpan.appendChild(fndSpan);
        }

        tag.appendChild(labelSpan);
        tag.appendChild(valueSpan);

        return tag;
    }

    function getBalance(issueId, callback) {
        fundRequestContract.balance.call(web3.fromAscii('GITHUB'), web3.fromAscii(String(issueId)), callback);
    }

    function updateBalance(issueId) {
        getBalance(issueId, function(err, result) {
            let items = document.querySelectorAll(`[data-${camelCaseToDash(settings.dataNames.funding)}="${issueId}"]`);
            for(let i = 0; i < items.length; i++) {
                items[i].innerHTML = weiToString(result);
            }
        });
    }

    function initIssue(issue) {
        let issueId = issue.dataset.id;
        let opened = issue.querySelector('.opened-by');

        if (typeof issueId !== 'undefined') {
            getBalance(issueId, function(err, result) {
                let issueBalance = weiToString(result);
                if (issueBalance !== '0.00') {
                    opened.appendChild(createSpan('- Total Funding: ', issueId, issueBalance, settings.dataNames.funding, true, '#1d76db'));
                } else {
                    opened.appendChild(createSpan('- Total Funding: ', issueId, '0.00', settings.dataNames.funding));
                }
            });
        }
    }

    function initIssueOverview() {
        let issues = document.querySelectorAll('[data-id]');
        if (issues.length > 0) {
            initContracts();
            for (let i = 0; i < issues.length; i++) {
                initIssue(issues[i]);
            }
        }
    }

    function initIssueDetail() {
        let issueContainer = document.querySelector('#show_issue');

        if (issueContainer !== null) {
            initContracts();

            let actions = issueContainer.querySelector('.gh-header-actions');
            let sidebar = issueContainer.querySelector('#partial-discussion-sidebar');
            let issueId = issueContainer.querySelector('[name="issue_id"]').value;

            button = document.createElement('button');
            button.innerHTML = 'Fund';
            button.className = 'btn btn-sm btn-blue';
            button.id = 'fnd-fund';

            let info = document.createElement('div');
            info.className = 'discussion-sidebar-item sidebar-fundrequest';

            let infoTitle = document.createElement('div');
            infoTitle.className = 'discussion-sidebar-heading text-bold';
            infoTitle.innerHTML = 'FundRequest';

            info.appendChild(infoTitle);
            info.appendChild(createDiv('Total Funding - ', issueId, '-', settings.dataNames.funding, true, '#1d76db'));
            info.appendChild(createDiv('# Funders - ', issueId, '2?', 'fndTotalFunders', false));
            info.appendChild(createDiv('Your funding - ', issueId, '5?', 'fndYourFunding'));

            sidebar.insertBefore(info, sidebar.firstChild);
            actions.insertBefore(button, actions.firstChild);

            updateBalance(issueId);

            button.addEventListener("click", function() {
                chrome.extension.sendMessage({
                    action: 'fund',
                    url: document.head.querySelector('[property="og:url"]').content
                }, function(response) {
                    if (response.done) {
                        response.success ? (console.log('success')) : console.log('no success');
                    }
                    // TODO: show notification
                });
            });
        }
    }

    // TODO: listen on transaction, when complete update values

    chrome.extension.sendMessage({action: 'load'}, function(response) {
        let readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {
                clearInterval(readyStateCheckInterval);
                init();
                document.addEventListener('pjax:complete', function() {
                    init();
                });
            }
        }, 10);
    });
})();