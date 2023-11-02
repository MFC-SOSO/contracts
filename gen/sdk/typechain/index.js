"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestToken__factory = exports.TestShares__factory = exports.TestProxy__factory = exports.TestConfig__factory = exports.TestAuthenticate__factory = exports.MakeFriendsCoin__factory = exports.Launcher__factory = exports.IShares__factory = exports.IPowerStore__factory = exports.IPowerPoint__factory = exports.IMakeFriendCoin__factory = exports.ILauncher__factory = exports.IConfig__factory = exports.IAuthenticate__factory = exports.IERC20__factory = exports.IERC20Metadata__factory = exports.ERC20Burnable__factory = exports.ERC20__factory = exports.Proxy__factory = exports.ERC1967Upgrade__factory = exports.ERC1967Proxy__factory = exports.IBeacon__factory = exports.IERC1967__factory = exports.IERC1271__factory = exports.IERC1822Proxiable__factory = exports.Ownable__factory = exports.IERC165Upgradeable__factory = exports.ERC165Upgradeable__factory = exports.ContextUpgradeable__factory = exports.IERC1155Upgradeable__factory = exports.IERC1155ReceiverUpgradeable__factory = exports.IERC1155MetadataURIUpgradeable__factory = exports.ERC1155Upgradeable__factory = exports.UUPSUpgradeable__factory = exports.Initializable__factory = exports.ERC1967UpgradeUpgradeable__factory = exports.IBeaconUpgradeable__factory = exports.IERC1967Upgradeable__factory = exports.IERC1822ProxiableUpgradeable__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var IERC1822ProxiableUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/interfaces/draft-IERC1822Upgradeable.sol/IERC1822ProxiableUpgradeable__factory");
Object.defineProperty(exports, "IERC1822ProxiableUpgradeable__factory", { enumerable: true, get: function () { return IERC1822ProxiableUpgradeable__factory_1.IERC1822ProxiableUpgradeable__factory; } });
var IERC1967Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/interfaces/IERC1967Upgradeable__factory");
Object.defineProperty(exports, "IERC1967Upgradeable__factory", { enumerable: true, get: function () { return IERC1967Upgradeable__factory_1.IERC1967Upgradeable__factory; } });
var IBeaconUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable__factory");
Object.defineProperty(exports, "IBeaconUpgradeable__factory", { enumerable: true, get: function () { return IBeaconUpgradeable__factory_1.IBeaconUpgradeable__factory; } });
var ERC1967UpgradeUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable__factory");
Object.defineProperty(exports, "ERC1967UpgradeUpgradeable__factory", { enumerable: true, get: function () { return ERC1967UpgradeUpgradeable__factory_1.ERC1967UpgradeUpgradeable__factory; } });
var Initializable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable__factory");
Object.defineProperty(exports, "Initializable__factory", { enumerable: true, get: function () { return Initializable__factory_1.Initializable__factory; } });
var UUPSUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable__factory");
Object.defineProperty(exports, "UUPSUpgradeable__factory", { enumerable: true, get: function () { return UUPSUpgradeable__factory_1.UUPSUpgradeable__factory; } });
var ERC1155Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable__factory");
Object.defineProperty(exports, "ERC1155Upgradeable__factory", { enumerable: true, get: function () { return ERC1155Upgradeable__factory_1.ERC1155Upgradeable__factory; } });
var IERC1155MetadataURIUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/IERC1155MetadataURIUpgradeable__factory");
Object.defineProperty(exports, "IERC1155MetadataURIUpgradeable__factory", { enumerable: true, get: function () { return IERC1155MetadataURIUpgradeable__factory_1.IERC1155MetadataURIUpgradeable__factory; } });
var IERC1155ReceiverUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155ReceiverUpgradeable__factory");
Object.defineProperty(exports, "IERC1155ReceiverUpgradeable__factory", { enumerable: true, get: function () { return IERC1155ReceiverUpgradeable__factory_1.IERC1155ReceiverUpgradeable__factory; } });
var IERC1155Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable__factory");
Object.defineProperty(exports, "IERC1155Upgradeable__factory", { enumerable: true, get: function () { return IERC1155Upgradeable__factory_1.IERC1155Upgradeable__factory; } });
var ContextUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable__factory");
Object.defineProperty(exports, "ContextUpgradeable__factory", { enumerable: true, get: function () { return ContextUpgradeable__factory_1.ContextUpgradeable__factory; } });
var ERC165Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable__factory");
Object.defineProperty(exports, "ERC165Upgradeable__factory", { enumerable: true, get: function () { return ERC165Upgradeable__factory_1.ERC165Upgradeable__factory; } });
var IERC165Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable__factory");
Object.defineProperty(exports, "IERC165Upgradeable__factory", { enumerable: true, get: function () { return IERC165Upgradeable__factory_1.IERC165Upgradeable__factory; } });
var Ownable__factory_1 = require("./factories/@openzeppelin/contracts/access/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var IERC1822Proxiable__factory_1 = require("./factories/@openzeppelin/contracts/interfaces/draft-IERC1822.sol/IERC1822Proxiable__factory");
Object.defineProperty(exports, "IERC1822Proxiable__factory", { enumerable: true, get: function () { return IERC1822Proxiable__factory_1.IERC1822Proxiable__factory; } });
var IERC1271__factory_1 = require("./factories/@openzeppelin/contracts/interfaces/IERC1271__factory");
Object.defineProperty(exports, "IERC1271__factory", { enumerable: true, get: function () { return IERC1271__factory_1.IERC1271__factory; } });
var IERC1967__factory_1 = require("./factories/@openzeppelin/contracts/interfaces/IERC1967__factory");
Object.defineProperty(exports, "IERC1967__factory", { enumerable: true, get: function () { return IERC1967__factory_1.IERC1967__factory; } });
var IBeacon__factory_1 = require("./factories/@openzeppelin/contracts/proxy/beacon/IBeacon__factory");
Object.defineProperty(exports, "IBeacon__factory", { enumerable: true, get: function () { return IBeacon__factory_1.IBeacon__factory; } });
var ERC1967Proxy__factory_1 = require("./factories/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy__factory");
Object.defineProperty(exports, "ERC1967Proxy__factory", { enumerable: true, get: function () { return ERC1967Proxy__factory_1.ERC1967Proxy__factory; } });
var ERC1967Upgrade__factory_1 = require("./factories/@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade__factory");
Object.defineProperty(exports, "ERC1967Upgrade__factory", { enumerable: true, get: function () { return ERC1967Upgrade__factory_1.ERC1967Upgrade__factory; } });
var Proxy__factory_1 = require("./factories/@openzeppelin/contracts/proxy/Proxy__factory");
Object.defineProperty(exports, "Proxy__factory", { enumerable: true, get: function () { return Proxy__factory_1.Proxy__factory; } });
var ERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/ERC20__factory");
Object.defineProperty(exports, "ERC20__factory", { enumerable: true, get: function () { return ERC20__factory_1.ERC20__factory; } });
var ERC20Burnable__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable__factory");
Object.defineProperty(exports, "ERC20Burnable__factory", { enumerable: true, get: function () { return ERC20Burnable__factory_1.ERC20Burnable__factory; } });
var IERC20Metadata__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory");
Object.defineProperty(exports, "IERC20Metadata__factory", { enumerable: true, get: function () { return IERC20Metadata__factory_1.IERC20Metadata__factory; } });
var IERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/IERC20__factory");
Object.defineProperty(exports, "IERC20__factory", { enumerable: true, get: function () { return IERC20__factory_1.IERC20__factory; } });
var IAuthenticate__factory_1 = require("./factories/contracts/interfaces/IAuthenticate__factory");
Object.defineProperty(exports, "IAuthenticate__factory", { enumerable: true, get: function () { return IAuthenticate__factory_1.IAuthenticate__factory; } });
var IConfig__factory_1 = require("./factories/contracts/interfaces/IConfig__factory");
Object.defineProperty(exports, "IConfig__factory", { enumerable: true, get: function () { return IConfig__factory_1.IConfig__factory; } });
var ILauncher__factory_1 = require("./factories/contracts/interfaces/ILauncher__factory");
Object.defineProperty(exports, "ILauncher__factory", { enumerable: true, get: function () { return ILauncher__factory_1.ILauncher__factory; } });
var IMakeFriendCoin__factory_1 = require("./factories/contracts/interfaces/IMakeFriendCoin__factory");
Object.defineProperty(exports, "IMakeFriendCoin__factory", { enumerable: true, get: function () { return IMakeFriendCoin__factory_1.IMakeFriendCoin__factory; } });
var IPowerPoint__factory_1 = require("./factories/contracts/interfaces/IPowerPoint__factory");
Object.defineProperty(exports, "IPowerPoint__factory", { enumerable: true, get: function () { return IPowerPoint__factory_1.IPowerPoint__factory; } });
var IPowerStore__factory_1 = require("./factories/contracts/interfaces/IPowerStore__factory");
Object.defineProperty(exports, "IPowerStore__factory", { enumerable: true, get: function () { return IPowerStore__factory_1.IPowerStore__factory; } });
var IShares__factory_1 = require("./factories/contracts/interfaces/IShares__factory");
Object.defineProperty(exports, "IShares__factory", { enumerable: true, get: function () { return IShares__factory_1.IShares__factory; } });
var Launcher__factory_1 = require("./factories/contracts/Launcher__factory");
Object.defineProperty(exports, "Launcher__factory", { enumerable: true, get: function () { return Launcher__factory_1.Launcher__factory; } });
var MakeFriendsCoin__factory_1 = require("./factories/contracts/MakeFriendsCoin__factory");
Object.defineProperty(exports, "MakeFriendsCoin__factory", { enumerable: true, get: function () { return MakeFriendsCoin__factory_1.MakeFriendsCoin__factory; } });
var TestAuthenticate__factory_1 = require("./factories/contracts/test/TestAuthenticate__factory");
Object.defineProperty(exports, "TestAuthenticate__factory", { enumerable: true, get: function () { return TestAuthenticate__factory_1.TestAuthenticate__factory; } });
var TestConfig__factory_1 = require("./factories/contracts/test/TestConfig__factory");
Object.defineProperty(exports, "TestConfig__factory", { enumerable: true, get: function () { return TestConfig__factory_1.TestConfig__factory; } });
var TestProxy__factory_1 = require("./factories/contracts/test/TestProxy__factory");
Object.defineProperty(exports, "TestProxy__factory", { enumerable: true, get: function () { return TestProxy__factory_1.TestProxy__factory; } });
var TestShares__factory_1 = require("./factories/contracts/test/TestShares__factory");
Object.defineProperty(exports, "TestShares__factory", { enumerable: true, get: function () { return TestShares__factory_1.TestShares__factory; } });
var TestToken__factory_1 = require("./factories/contracts/test/TestToken__factory");
Object.defineProperty(exports, "TestToken__factory", { enumerable: true, get: function () { return TestToken__factory_1.TestToken__factory; } });
