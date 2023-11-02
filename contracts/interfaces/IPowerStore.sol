// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPowerStore {
    function injectPower(address shareId, uint256 amount) external;
}
