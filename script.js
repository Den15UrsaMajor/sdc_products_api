import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // vus: 10,
  // duration: '15s',
  scenarios: {
    // constant_request_rate_10rps: {
    //   executor: 'constant-arrival-rate',
    //   rate: 10,
    //   timeUnit: '1s',
    //   duration: '30s',
    //   preAllocatedVUs: 100,
    //   maxVUs: 200,

    // },
    constant_request_rate_1000rps: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 1000,

    },
  },
};

export default function () {
  const res = http.get('http://localhost:3500/products/432/styles');
  check(res, {
    'status was 200': (r) => r.status == 200,
    // 'transaction time < 200ms': (r) => r.timings.duration < 200,
  });
  sleep(1);
}
