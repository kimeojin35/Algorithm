#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

#define MAX_SIZE 10000

int main() {
    int data[MAX_SIZE];
    int front = -1, rear = -1;

    int num;
    char s[100];

    scanf("%d", &num);

    for (int i = 0; i < num; i++) {
        scanf("%s", s);
        if (strcmp(s, "push") == 0) {
            int n;
            scanf("%d", &n);
            data[++rear] = n;
        }
        else if (strcmp(s, "pop") == 0) {
            if (front == rear) printf("-1\n");
            else printf("%d\n", data[++front]);
        }
        else if (strcmp(s, "size") == 0) printf("%d\n", rear - front);
        else if (strcmp(s, "empty") == 0) {
            if (front == rear) printf("1\n");
            else printf("0\n");
        }
        else if (strcmp(s, "front") == 0) {
            if (front == rear) printf("-1\n");
            else printf("%d\n", data[front + 1]);
        }
        else if (strcmp(s, "back") == 0) {
            if (front == rear) printf("-1\n");
            else printf("%d\n", data[rear]);
        }
    }
    return 0;
}