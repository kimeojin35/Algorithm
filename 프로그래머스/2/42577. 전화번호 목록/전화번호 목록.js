function solution(phone_book) {
    phone_book.sort(); // 문자열 정렬 (접두어 관계를 확인하기 쉽게)
    
    const phone_set = new Set(phone_book); // 해시셋으로 저장

    for (const n of phone_book) {
        let p = "";
        for (const c of n) {
            p += c; // 한 글자씩 누적하여 접두사 생성
            if (p !== n && phone_set.has(p)) {
                return false; // 접두사가 존재하면 false 반환
            }
        }
    }

    return true; // 접두사가 없으면 true 반환
}
