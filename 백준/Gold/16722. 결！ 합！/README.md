# [Gold V] 결! 합! - 16722 

[문제 링크](https://www.acmicpc.net/problem/16722) 

### 성능 요약

메모리: 9480 KB, 시간: 92 ms

### 분류

브루트포스 알고리즘, 구현, 시뮬레이션

### 제출 일자

2025년 6월 11일 10:09:47

### 문제 설명

<p><img alt="" src="https://upload.acmicpc.net/096fdd17-c208-43c3-9f7d-d0ea381fa7d7/-/preview/"></p>

<p> </p>

<p>‘결! 합!’ 게임은 위의 그림과 같이 도형의 모양, 도형의 색, 배경색 세 가지 속성이 각각 다르게 조합된 27장의 그림들 중 선택된 아홉 장의 그림들로 진행된다. 도형의 모양으로는 {동그라미, 세모, 네모}, 도형의 색으로는 {노란색, 빨간색, 파란색}, 배경색으로는 {회색, 흰색, 검은색}이 존재한다. 아홉 장의 그림들의 세 가지 속성이 주어지면 게임의 플레이어는 ‘합’이 되는 세 장의 그림을 찾아야한다. ‘합’이란 <strong>그림의 세 가지 속성이 모두 같거나 모두 다른 세 장의 그림 조합</strong>을 의미한다. </p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/aefe76b1-a2c3-41a1-b900-797c6120dfe9/-/preview/"></p>

<p>예를 들어, 위 예시 1에 주어진 세 장의 그림은 도형의 모양이 모두 같고 도형의 색이 모두 다르고 배경색이 모두 같기 때문에 세 속성 전부가 모두 같거나 모두 다르므로 ‘합’을 이룬다. 그러나 예시 2에 주어진 세 장의 그림은 배경색이 모두 다르고 도형의 모양도 모두 다르지만 도형의 색은 모두 다르지도 모두 같지도 않기 때문에 ‘합’을 이루지 않는다.</p>

<p>‘결! 합!’ 게임은 초기점수로 0점을 가지고 시작하며 플레이어가 점수를 얻을 수 있는 행동은 다음 두 가지가 있다.</p>

<ul>
	<li>‘합’ 외치기: ‘합’이라고 생각되는 서로 다른 그림 세 장의 번호를 외친다. 외친 번호의 그림 세 장이 ‘합’을 이루면서 이전에 외친 적이 없는 그림 조합이라면 +1점을, 아니라면 -1점을 획득한다.</li>
	<li>‘결’ 외치기: 아홉 장의 그림으로 조합 가능한 '합'들 중 외치지 않은 ‘합’이 더 이상 없다고 생각될 경우 ‘결’을 외친다. 실제로 외치지 않은 ‘합’ 이 없고 ‘결’을 통해 +3점을 얻은 적이 없다면 +3점을, 아니라면 -1점을 획득한다.</li>
</ul>

<p>게임에 사용될 아홉 장의 그림의 속성들과 플레이어의 게임 기록이 주어졌을 때, 플레이어의 최종 점수를 구하는 프로그램을 작성하여라.</p>

### 입력 

 <p>첫 번째 줄부터 아홉 줄에 걸쳐 i(1 ≤ i ≤ 9)번 그림의 도형의 모양, 도형의 색, 배경색을 나타나는 S<sub>i</sub>, C<sub>i</sub>, B<sub>i</sub>가 주어진다.</p>

<p>S<sub>i</sub>는 {“CIRCLE”, “TRIANGLE”, ”SQUARE”}, C<sub>i</sub>는 {“YELLOW”, “RED”, “BLUE”}, B<sub>i</sub>는 {“GRAY”, “WHITE”, “BLACK”} 중 하나이다. 각 속성 사이에는 공백이 하나 주어진다.<br>
열 번째 줄에 플레이어의 게임 기록의 수 n(1 ≤ n ≤ 100)이 주어지고 다음 줄부터 n줄에 걸쳐 다음 두 가지 입력 중 하나가 주어진다.</p>

<ul>
	<li>H a b c : 플레이어가 ‘합’이라고 생각되는 서로 다른 그림의 번호 a, b, c를 외친 입력이다. (1 ≤ a, b, c ≤ 9)</li>
	<li>G : 플레이어가 ‘결’을 외친 입력이다.</li>
</ul>

### 출력 

 <p>첫 번째 줄에 플레이어의 최종 점수를 출력한다.</p>

