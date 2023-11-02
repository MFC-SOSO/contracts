// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "../interfaces/IAuthenticate.sol";
import "../interfaces/IConfig.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TestAuthenticate is IAuthenticate {
    IConfig public config;

    mapping(address => bool) private _authorized;

    mapping(address => mapping(bytes32 => uint256)) private _shareAuthorizedIds;

    mapping(bytes32 => address) private _searchKeyShares;

    modifier onlyOwner() {
        address owner = config.owner();
        require(msg.sender == owner, "authenticate: caller is not the owner");
        _;
    }

    event Authorized(address shareId, bytes32 authType, uint256 authId);

    constructor(IConfig _config) {
        config = _config;
    }

    function isAuthorized(
        address shareId
    ) external view override returns (bool) {
        return _authorized[shareId];
    }

    /// twitter
    bytes32 public constant _TWITTER_TYPEHASH = keccak256("Twitter");

    function _encodeTwitterSearchKey(
        uint256 twitterId
    ) private pure returns (bytes32) {
        return keccak256(abi.encode(_TWITTER_TYPEHASH, twitterId));
    }

    function authorizeTwitter(address shareId, uint256 twitterId) external {
        require(
            _shareAuthorizedIds[shareId][_TWITTER_TYPEHASH] == 0,
            "already authorized"
        );
        bytes32 searchKey = _encodeTwitterSearchKey(twitterId);
        require(
            _searchKeyShares[searchKey] == address(0),
            "already authorized"
        );
        _authorized[shareId] = true;
        _shareAuthorizedIds[shareId][_TWITTER_TYPEHASH] = uint256(twitterId);
        _searchKeyShares[searchKey] = shareId;

        emit Authorized(shareId, _TWITTER_TYPEHASH, twitterId);
    }

    function getShareIdByTwitterId(
        uint256 twitterId
    ) external view returns (address) {
        return _searchKeyShares[_encodeTwitterSearchKey(twitterId)];
    }

    function getShareTwitterId(
        address shareId
    ) external view returns (uint256) {
        uint256 twId = _shareAuthorizedIds[shareId][_TWITTER_TYPEHASH];
        require(twId != 0, "not authorized");
        return twId;
    }
}
