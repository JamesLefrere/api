// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Connects to the local chain and outputs a re-usable calls-only chain definition in  the form
// export default { chain: 'Development', genesisHash: '0x27b6d5e0f4fdce1c4d20b82406f193acacce0c19e0d2c0e7ca47725c2572a06a', ss58Format: 42, tokenDecimals: 0, tokenSymbol: 'UNIT'; metaCalls: 'bWV0...4AAA==' };

import process from 'process';
import yargs from 'yargs';
import { ApiPromise, WsProvider } from '@polkadot/api/index';

// retrieve and parse arguments - we do this globally, since this is a single command
const { argv: { ws } } = yargs
  .usage('Usage: [options]')
  .wrap(120)
  .options({
    ws: {
      default: 'ws://127.0.0.1:9944',
      description: 'The API endpoint to connect to, e.g. wss://poc3-rpc.polkadot.io',
      type: 'string',
      required: true
    }
  });

async function main (): Promise<void> {
  const provider = new WsProvider(ws);
  const api = await ApiPromise.create({ provider });

  const chain = await api.rpc.system.chain();
  const props = await api.rpc.system.properties();

  // output the chain info, for easy re-use
  console.error(`export default { chain: '${chain.toString()}', genesisHash: '${api.genesisHash.toHex()}', specVersion: ${api.runtimeVersion.specVersion.toNumber()}, ss58Format: ${props.ss58Format.unwrapOr(42)}, tokenDecimals: ${props.tokenDecimals.unwrapOr(0)}, tokenSymbol: '${props.tokenSymbol.unwrapOr('UNIT')}', metaCalls: '${Buffer.from(api.runtimeMetadata.asCallsOnly.toU8a()).toString('base64')}' };`);

  // show any missing types
  api.runtimeMetadata.getUniqTypes(false);
}

main()
  .then((): void => {
    process.exit(0);
  })
  .catch((error: Error) => {
    console.error('FATAL:', error.message);
    process.exit(-1);
  });
