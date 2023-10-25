#include <stdio.h>
#include <string.h>

#define MAX_N 20000
#define MAX_WORD_LEN 51

// 문자열을 저장할 배열
char words[MAX_N][MAX_WORD_LEN];

// 문자열 비교 함수
int compare(const void *a, const void *b) {
    // 길이가 다르면 길이가 짧은 순으로 정렬
    int len_diff = strlen((char *)a) - strlen((char *)b);
    if (len_diff != 0) {
        return len_diff;
    }
    
    // 길이가 같으면 사전 순으로 정렬
    return strcmp((char *)a, (char *)b);
}

int main() {
    int N;
    scanf("%d", &N);

    // 단어 입력
    for (int i = 0; i < N; i++) {
        scanf("%s", words[i]);
    }

    // 정렬
    qsort(words, N, sizeof(char) * MAX_WORD_LEN, compare);

    // 중복 제거 및 출력
    printf("%s\n", words[0]);
    for (int i = 1; i < N; i++) {
        if (strcmp(words[i], words[i - 1]) != 0) {
            printf("%s\n", words[i]);
        }
    }

    return 0;
}
