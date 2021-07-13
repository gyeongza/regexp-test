// 백틱 기호는 문자열 줄바꿈해도 무관
const str = `
010-7382-9600
gyeongza@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
`;

// 생성자 방식
// const regexp = new RegExp("the", "gi");
// console.log(str.match(regexp));
// expected to output ["The"]

// 리터럴 방식
// const regexp = /gyeongza/gi
// console.log(str.replace(regexp, 'asd'));

// 플래그
// \를 붙여서 일반적 문자로 해석 (.같은 경우 특정문자를 검색하는 패턴)
// $ 앞에 있는 문자로 끝나는 문장
// console.log(str.match(/\.$/gim));

// 단어찾기 (\b \b는 앞뒤로 잘라서 단어만 찾을 수 있음)
// console.log(
//     str.match(/\b\w{2,4}\b/gim)
// );

// 범위 a로 시작하는 모든 단어 찾기 
// console.log(
//     str.match(/\ba\w{1,}\b/gim)
// );

