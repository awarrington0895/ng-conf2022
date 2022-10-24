/// <reference lib="webworker" />

import jsSHA from 'jssha';

const getHash = (message: string): string => {
  const sha = new jsSHA('SHA-1', 'TEXT');

  sha.update(message);

  return sha.getHash('B64');
}

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data} is ${getHash(data)}`;
  
  postMessage(response);
});
