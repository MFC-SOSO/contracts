// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    uint8 internal _decimals;

    constructor() ERC20("Test USDT", "USDT") {
        _decimals = 6;
    }

    function mint(address receiver, uint256 amount) external {
        _mint(receiver, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
