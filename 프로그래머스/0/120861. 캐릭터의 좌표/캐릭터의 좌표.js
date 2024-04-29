function solution(keyinput, board) {
    // 보드의 중앙 좌표
    let centerX = Math.floor(board[0] / 2);
    let centerY = Math.floor(board[1] / 2);
    
    // 캐릭터의 초기 위치
    let x = 0;
    let y = 0;

    // 각 키 입력에 따라 캐릭터 이동
    keyinput.forEach((key) => {
        switch (key) {
            case "up":
                if (y < centerY) y++;
                break;
            case "down":
                if (y > -centerY) y--;
                break;
            case "left":
                if (x > -centerX) x--;
                break;
            case "right":
                if (x < centerX) x++;
                break;
        }
    });

    return [x, y];
}