import { G2Spec } from '../../../src';

export function aaplLineMissing(): G2Spec {
  return {
    type: 'line',
    data: {
      type: 'fetch',
      value: 'data/aapl.csv',
      transform: [
        // Simulate gaps.
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            close: d.date.getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    encode: {
      x: 'date',
      y: 'close',
    },
  };
}

aaplLineMissing.maxError = 100;
