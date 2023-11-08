#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#define MAX_SIZE 1000000

int stack[MAX_SIZE];
int top = 0;

int main() {
    int n;
    int n1, n2;
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        scanf("%d", &n2);
        switch (n2) {
        case 1:
            scanf("%d", &n1);
            if (top == MAX_SIZE - 1) return 0;
            stack[top] = n1;
            top++;
            break;
        case 2:
            if (top == 0) printf("-1\n");
            else {
                printf("%d", stack[top - 1]);
                stack[top - 1] = 0;
                top--;
                printf("\n");
            }
            break;
        case 3:
            printf("%d\n", top);
            break;
        case 4:
            if (top == 0) printf("1\n");
            else printf("0\n");
            break;
        case 5:
            if (top > 0) printf("%d\n", stack[top - 1]);
            else printf("-1\n");
            break;
        }
    }

    return 0;
}