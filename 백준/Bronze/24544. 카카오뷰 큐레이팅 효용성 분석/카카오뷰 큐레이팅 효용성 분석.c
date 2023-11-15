#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int n, m;
	int h1 = 0, h2 = 0;
	int a1[1000];
	int a2[1000];
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &m);
		a1[i] = m;
		h1 += m;
	}
	for (int i = 0; i < n; i++) {
		scanf("%d", &m);
		a2[i] = m;
	}
	for (int i = 0; i < n; i++) {
		if (a2[i] != 1) h2 += a1[i];
	}
	printf("%d\n", h1);
	printf("%d\n", h2);
	return 0;
}