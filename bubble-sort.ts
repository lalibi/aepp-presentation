const N = 20;

const A = [...Array(N).keys()]

const B = [...A];

for (let i = 1; i <= N-1; i += 1) {
	for (let j = N-1; j >= i; j -= 1) {
		if (A[j-1] > A[j]) {
			[A[j-1], A[j]] = [A[j], A[j-1]];
		}
	}
}

const b = 1;
