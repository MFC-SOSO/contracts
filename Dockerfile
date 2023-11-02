FROM ghcr.io/foundry-rs/foundry:nightly-b1c03fa5f21b5872ba5f91085b9d8ae04a008f8d

ADD ./anvil.sh /usr/local/bin/anvil.sh
ADD ./genesis.json /genesis.json

ENTRYPOINT [ "sh", "/usr/local/bin/anvil.sh" ]