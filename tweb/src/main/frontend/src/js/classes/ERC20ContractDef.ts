export default {
    "contractName": "ERC20",
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "who",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 {\n  function totalSupply() constant public returns (uint);\n\n  function balanceOf(address who) constant public returns (uint256);\n\n  function transfer(address to, uint256 value) public returns (bool);\n\n  function allowance(address owner, address spender) public constant returns (uint256);\n\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n\n  function approve(address spender, uint256 value) public returns (bool);\n\n  event Approval(address indexed _owner, address indexed _spender, uint256 _value);\n\n  event Transfer(address indexed _from, address indexed _to, uint256 _value);\n}",
    "sourcePath": "/Users/QuintenDes/FundRequest/contracts/contracts/token/ERC20.sol",
    "ast": {
        "absolutePath": "/Users/QuintenDes/FundRequest/contracts/contracts/token/ERC20.sol",
        "exportedSymbols": {
            "ERC20": [
                1791
            ]
        },
        "id": 1792,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1724,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:11"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
                "fullyImplemented": false,
                "id": 1791,
                "linearizedBaseContracts": [
                    1791
                ],
                "name": "ERC20",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1729,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1725,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "155:2:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1727,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1729,
                                    "src": "183:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1726,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "183:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "182:6:11"
                        },
                        "scope": 1791,
                        "src": "135:54:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1736,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1731,
                                    "name": "who",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1736,
                                    "src": "212:11:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1730,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "212:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "211:13:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1735,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1734,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1736,
                                    "src": "250:7:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1733,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "250:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "249:9:11"
                        },
                        "scope": 1791,
                        "src": "193:66:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1745,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1741,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1738,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "281:10:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1737,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "281:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1740,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "293:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "293:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "280:27:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1744,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1743,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "324:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1742,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "324:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "323:6:11"
                        },
                        "scope": 1791,
                        "src": "263:67:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1754,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "allowance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1750,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1747,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "353:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1746,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "353:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1749,
                                    "name": "spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "368:15:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1748,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "368:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "352:32:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1753,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1752,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "410:7:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1751,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "410:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "409:9:11"
                        },
                        "scope": 1791,
                        "src": "334:85:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1765,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1756,
                                    "name": "from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "445:12:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1755,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "445:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1758,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "459:10:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1757,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "459:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "471:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "471:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "444:41:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1763,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "502:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1762,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:6:11"
                        },
                        "scope": 1791,
                        "src": "423:85:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1774,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1770,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1767,
                                    "name": "spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "529:15:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1766,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "529:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1769,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "546:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1768,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "546:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "528:32:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1772,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "577:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1771,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "577:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "576:6:11"
                        },
                        "scope": 1791,
                        "src": "512:71:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1782,
                        "name": "Approval",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1776,
                                    "indexed": true,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "602:22:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1775,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "602:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1778,
                                    "indexed": true,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "626:24:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1777,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "626:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1780,
                                    "indexed": false,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "652:14:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1779,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "652:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "601:66:11"
                        },
                        "src": "587:81:11"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1790,
                        "name": "Transfer",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1784,
                                    "indexed": true,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "687:21:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1783,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "687:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1786,
                                    "indexed": true,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "710:19:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1785,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "710:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1788,
                                    "indexed": false,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "731:14:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1787,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "731:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "686:60:11"
                        },
                        "src": "672:75:11"
                    }
                ],
                "scope": 1792,
                "src": "116:633:11"
            }
        ],
        "src": "0:749:11"
    },
    "legacyAST": {
        "absolutePath": "/Users/QuintenDes/FundRequest/contracts/contracts/token/ERC20.sol",
        "exportedSymbols": {
            "ERC20": [
                1791
            ]
        },
        "id": 1792,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1724,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:11"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
                "fullyImplemented": false,
                "id": 1791,
                "linearizedBaseContracts": [
                    1791
                ],
                "name": "ERC20",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1729,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1725,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "155:2:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1727,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1729,
                                    "src": "183:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1726,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "183:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "182:6:11"
                        },
                        "scope": 1791,
                        "src": "135:54:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1736,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1731,
                                    "name": "who",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1736,
                                    "src": "212:11:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1730,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "212:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "211:13:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1735,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1734,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1736,
                                    "src": "250:7:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1733,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "250:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "249:9:11"
                        },
                        "scope": 1791,
                        "src": "193:66:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1745,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1741,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1738,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "281:10:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1737,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "281:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1740,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "293:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "293:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "280:27:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1744,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1743,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1745,
                                    "src": "324:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1742,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "324:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "323:6:11"
                        },
                        "scope": 1791,
                        "src": "263:67:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1754,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "allowance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1750,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1747,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "353:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1746,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "353:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1749,
                                    "name": "spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "368:15:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1748,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "368:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "352:32:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1753,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1752,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1754,
                                    "src": "410:7:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1751,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "410:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "409:9:11"
                        },
                        "scope": 1791,
                        "src": "334:85:11",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1765,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1756,
                                    "name": "from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "445:12:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1755,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "445:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1758,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "459:10:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1757,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "459:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "471:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "471:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "444:41:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1763,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1765,
                                    "src": "502:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1762,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:6:11"
                        },
                        "scope": 1791,
                        "src": "423:85:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1774,
                        "implemented": false,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1770,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1767,
                                    "name": "spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "529:15:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1766,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "529:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1769,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "546:13:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1768,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "546:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "528:32:11"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 1773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1772,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1774,
                                    "src": "577:4:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1771,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "577:4:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "576:6:11"
                        },
                        "scope": 1791,
                        "src": "512:71:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1782,
                        "name": "Approval",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1776,
                                    "indexed": true,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "602:22:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1775,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "602:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1778,
                                    "indexed": true,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "626:24:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1777,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "626:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1780,
                                    "indexed": false,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1782,
                                    "src": "652:14:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1779,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "652:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "601:66:11"
                        },
                        "src": "587:81:11"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1790,
                        "name": "Transfer",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1784,
                                    "indexed": true,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "687:21:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1783,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "687:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1786,
                                    "indexed": true,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "710:19:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1785,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "710:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1788,
                                    "indexed": false,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1790,
                                    "src": "731:14:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1787,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "731:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "686:60:11"
                        },
                        "src": "672:75:11"
                    }
                ],
                "scope": 1792,
                "src": "116:633:11"
            }
        ],
        "src": "0:749:11"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "2.0.0",
    "updatedAt": "2018-04-05T08:53:43.654Z"
}