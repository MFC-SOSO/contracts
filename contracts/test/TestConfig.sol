// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "../interfaces/IConfig.sol";
import "./TestAuthenticate.sol";
import "./TestShares.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TestConfig is IConfig {
    address private _owner;
    TestAuthenticate private _authi;
    TestShares private _shares;

    constructor() {
        _owner = tx.origin;
        _authi = new TestAuthenticate(this);
        _shares = new TestShares();
    }

    function owner() external view override returns (address) {
        return _owner;
    }

    function getShares() external view override returns (address) {
        return address(_shares);
    }

    function getVAMM() external pure override returns (address) {
        return address(0);
    }

    function getSequencer() external pure override returns (address) {
        return address(0);
    }

    function getAuthenticate() external view override returns (address) {
        return address(_authi);
    }

    function acceptedToken() external pure override returns (IERC20Metadata) {
        return IERC20Metadata(address(0));
    }

    function mockAuth(address shareId) external {
        _authi.authorizeTwitter(shareId, uint256(uint160(shareId)));
    }
}
