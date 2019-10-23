function getNetworkStats(
  sampleSize //!< [in] Larger n give more accurate numbers but with longer latency.
) {
  blockNum = eth.blockNumber; // Save this value to atomically get a block number.
  blockTime = (eth.getBlock(blockNum).timestamp - eth.getBlock(blockNum - sampleSize).timestamp) / sampleSize;
  difficulty = eth.getBlock(blockNum).difficulty; // You can sum up the last n-blocks and average; this is mathematically sound.
  return {
    "blocktime": blockTime,
    "difficulty": difficulty,
    "hashrate": difficulty / blockTime,
  };
}
