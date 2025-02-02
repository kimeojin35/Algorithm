-- 코드를 입력하세요
SELECT BOOK_ID, AUTHOR_NAME, LEFT(PUBLISHED_DATE, 10)
FROM BOOK INNER JOIN AUTHOR ON BOOK.AUTHOR_ID = AUTHOR.AUTHOR_ID
WHERE CATEGORY = '경제'
ORDER BY PUBLISHED_DATE ASC
