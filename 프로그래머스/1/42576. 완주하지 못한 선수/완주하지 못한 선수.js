function solution(participant, completion) {
    const participantMap = new Map();

    // 참가자 목록을 Map으로 변환
    participant.forEach(name => {
        if (participantMap.has(name)) {
            participantMap.set(name, participantMap.get(name) + 1);
        } else {
            participantMap.set(name, 1);
        }
    });

    // 완주자 목록을 참가자 Map에서 빼기
    completion.forEach(name => {
        if (participantMap.has(name)) {
            const count = participantMap.get(name);
            if (count === 1) {
                participantMap.delete(name);
            } else {
                participantMap.set(name, count - 1);
            }
        }
    });

    // Map에 남아있는 참가자가 답
    const result = Array.from(participantMap.keys())[0];
    return result;
}