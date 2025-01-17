// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { JsonRpcRequest, JsonRpcResponse, JsonRpcResponseBaseError } from '../types';

import { assert, isUndefined, isNumber } from '@polkadot/util';

export default class RpcCoder {
  private id = 0;

  public decodeResponse (response: JsonRpcResponse): any {
    assert(response, 'Empty response object received');
    assert(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');

    const isSubscription = !isUndefined(response.params) && !isUndefined(response.method);

    assert(isNumber(response.id) || (isSubscription && isNumber(response.params.subscription)), 'Invalid id field in decoded object');

    this.checkError(response.error);

    assert(!isUndefined(response.result) || isSubscription, 'No result found in JsonRpc response');

    if (isSubscription) {
      this.checkError(response.params.error);

      return response.params.result;
    }

    return response.result;
  }

  public encodeJson (method: string, params: any | any[]): string {
    return JSON.stringify(
      this.encodeObject(method, params)
    );
  }

  public encodeObject (method: string, params: any | any[]): JsonRpcRequest {
    return {
      id: ++this.id,
      jsonrpc: '2.0',
      method,
      params
    };
  }

  public getId (): number {
    return this.id;
  }

  private checkError (error?: JsonRpcResponseBaseError): void {
    if (error) {
      const { code, data, message } = error;
      const _data = isUndefined(data)
        ? ''
        : ' (' + `${data}`.substr(0, 10) + ')';

      throw new Error(`${code}: ${message}${_data}`);
    }
  }
}
